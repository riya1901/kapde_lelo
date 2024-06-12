import React from 'react'
import Card from '../card/Card'
import './category.css';

function Category({title,Productdata,updatecart,cart}) {
  return (
    <div>
            <div className='title'><p>{title}</p></div>
    <div className="products">
    
  
          {Productdata.map((product) => (
            <Card
            key={product.key} id={product.key} 
            img={product.image} name={product.title}  price={product.price} updatecart={updatecart} cart={cart}/>
          ))}

    
    </div>
    </div>
  )
}

export default Category