import React, { useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import './category.css'
import axios from 'axios';
import Loader from '../loader/loader.jsx';

function Category({ title, categoryvalue, search }) {

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setpage] = useState(0)
  const [pageup, setpageup] = useState(false)

console.log("cate" ,categoryvalue)

  useEffect(() => {
    const handleinfiniteScroll = () => {

      console.log("I h",window.innerHeight )
      console.log("st",document.documentElement.scrollTop )
      console.log("s h", document.documentElement.scrollHeight )
      
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight +15||window.innerHeight + document.documentElement.scrollTop == document.documentElement.scrollHeight) {
        setpageup(true)
      }
    }
    if(pageup){
      setpage(page+1)
      setpageup(false)
    }
    window.addEventListener("scroll", handleinfiniteScroll)  
    return () => window.removeEventListener("scroll", () => { console.log("event released") })

  })

  useEffect(() => {
  
    console.log("page", page)

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (search == "") {
          const response = categoryvalue !== ""
            ? await axios.get(`https://kapde-lelo-server.onrender.com/category/${categoryvalue}`)
            : await axios.get(`https://kapde-lelo-server.onrender.com/items/${page}`);
       
            setProductData([...productData, ...response.data]);
        

        } else {
          const response =
            await axios.get(`https://kapde-lelo-server.onrender.com/search/${search}`)
          setProductData(response.data);
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [categoryvalue, search, page]);


if(page==0&&loading){

  return <loading/>
}

  if (error) {
    return <div className="error">{error}</div>;
  }

  console.log(productData)



  return (
    <>
      <div>
        <div className='title'><p>{search == "" ? title : "Search Result"}</p></div>
      </div>

      <div className="products">

        {productData.map((product,index) => (
          <Card key={index} id={product._id}
            img={product.image}
            name={product.title}
            price={product.price} />
        ))}
        <div className="expand">
        <i className="arrow  down " onClick={()=>setpage(page+1)}></i>
        </div>
      </div>


    </>
  );
}

export default Category;
