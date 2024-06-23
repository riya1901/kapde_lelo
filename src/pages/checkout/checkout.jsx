import React, { useState, useMemo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Productdata from "../../assets/productdata.json";
import { useSelector } from 'react-redux';
import './checkout.css'
import Out from '../../components/checkoutform/out'

function Checkout() {

    const { id, len,price } = useParams()
    const Cart = useSelector((state) => state.cart);
    
    return (
        
            <div className='cartPage'>
                <div className="cart-main">
                    <div className="title">Cart Summary</div>
                    <div className='bill-details'><p>total item = {len}</p> ${price}</div>
                </div>
                <div className="cart-main">
                    {
                        (id==null)?
                        (<Out/>):
                        (<Out id={id}/>)

                    }

                </div>
            </div>

    
    )
}

export default Checkout
