import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './productPage.css'
import Productdata from "./productdata.json";
import { addtocart } from "../../Store/action.js";
import Category from '../category/Category.jsx';

function ProductPage({id, updatecart, cart}) {
  //const index=Productdata.findIndex(item => item.product.id == id);
  //const product=Productdata[index];
  //updatecart(useSelector((state) => state)) ;
  const dispatch = useDispatch();

  function handleaddtocart() {
    dispatch(addtocart({ id }));
  }
  return (
    <div className="ProductPage">
      <div className='product-main'>
        <div className='product'>
          <img src="src/assets/shop.png" alt="can not load" />
          <div className='details'>
            <p className='title'>Titel of the item </p>
            <p className='special'>offer price</p>
            <p className='price'>MRP: <span className='offer'>$20</span> <span>$32</span> <span className='offer'>20% off</span> </p>
            <p className="review">
              3.5<span> &#9733;</span>&nbsp;&nbsp;3244 reviews
            </p>
            <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati omnis tempora ab harum blanditiis ratione facere tenetur, aliquid, soluta quasi magnam consequatur quas beatae nisi non excepturi nobis dolorem.
            </p>
            <div className='buybtn'>
              <button className="pushable">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">
                  Add to cart
                </span>
              </button>
              <button className="pushable">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">
                  Buy Now
                </span>
              </button>
            </div>
          </div>
        </div>
                  <hr className="divider"></hr>

        <div className='suggestion'>
          
        <Category title="Things you might like" Productdata={Productdata} cart={cart} updatecart={updatecart}/>
        </div>
      </div>

    </div>

  )
}

export default ProductPage