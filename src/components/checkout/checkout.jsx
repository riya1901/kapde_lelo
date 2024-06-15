import React, { useState, useMemo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Productdata from "../../assets/productdata.json";
import { useSelector } from 'react-redux';
import './checkout.css'
import Out from '../checkoutform/out'

function Checkout() {
    const [totalPrice, setTotalPrice] = useState(0);

    const { id } = useParams()
    const Cart = useSelector((state) => state);
    const product = useMemo(() => Productdata.find(item => item.key == id), [id]);
    let quantity;
    useEffect(() => {
        if (id != null) {
            Cart.map((item) => {
                if (item.product.id == id)
                    quantity = item.quantity;
            })
            setTotalPrice(product.price * quantity)
        }
        else {
            let total = 0;
            Cart.map(item => {
                const product = Productdata.find(product => product.key == item.product.id);
                total = total + (product.price * item.quantity)
            })
            setTotalPrice(total)

        }

    }, [Cart]);

    return (
        
            <div className='cartPage'>
                <div className="cart-main">
                    <div className="title">Cart Summary</div>
                    {(id != null) ? (<div className='bill-details'><p>Total Item = 1</p> Total Price=${totalPrice}</div>) : (<div className='bill-details'><p>total item = {Cart.length}</p> ${totalPrice}</div>)}
                </div>
                <div className="cart-main">
                    {(id != null) ?(<Out id={id}/>):(<Out/>)}

                </div>
            </div>

    
    )
}

export default Checkout
