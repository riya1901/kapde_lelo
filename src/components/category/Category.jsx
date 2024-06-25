import React, { useEffect, useState } from 'react';
import Card from '../card/Card.jsx';
import './category.css'
import axios from 'axios';
import Loader from '../loader/loader.jsx';

function Category({ title, categoryvalue }) {
  console.log("category called");

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("category cat value",categoryvalue);
 



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = categoryvalue !== ""
          ? await axios.get(`http://localhost:5555/category/${categoryvalue}`)
          : await axios.get("http://localhost:5555/items");

        setProductData(response.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [categoryvalue]);

  if (loading) {

    return (<div className='lmain'><Loader /></div> 
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <div>
        <div className='title'><p>{title}</p></div>
      </div>
      <div className="products">
        {productData.map((product) => (
          <Card key={product._id} id={product._id}
          img={product.image}
          name={product.title}
          price={product.price}/>
        ))}
      </div>
    </>
  );
}

export default Category;
