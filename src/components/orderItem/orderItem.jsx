import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './orderitem.css'

function OrderItem(order) {
  const [orderitems, setorderitems] = useState({})
  const[expand,setexpand]=useState(false)
  async function find(id) {
    try {
      const response = await axios.get(`https://kapde-lelo-server.onrender.com/product/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  useEffect(() => {
    const updateorderItems = async () => {
      const temp = await Promise.all(
        order.order.orderItems.map(async (product) => {
          const itemdetails = await find(product.item);
          return { ...itemdetails, quantity: product.quantity };
        })
      );
      setorderitems(temp);
    };
    updateorderItems();
  }, [order]);
 
  return (
    <div className='item-main'>
      <span className="orderid">

        orderid: {order.order._id}
      </span>
      <div className='order-details'>
        <span className="date">
          date placed:<p>
            {order.order.date}</p>
        </span>
        <span>
          status: <p className='status'>

            {order.order.status}
          </p>
        </span>
        <span>
          items:<p>
            {Object.keys(order.order.orderItems).length}

          </p>
        </span>
        <span>
          total :<p>

            ${order.order.total}
          </p>
        </span>
        {expand ? (
                
        <div className={`details ${expand ? "active" :""}` } >
          <div className="divider"></div>
        {orderitems.map((product) => ( 
          <div key={product._id} className="expand-main" >
            <span className="item-name" >
              {product.title}
            </span>
            <div className="expand-details" >
            <span>
              quantity: <p>
              ${product.quantity}
              </p>
            </span>
            <span>
              item total: <p>
              ${product.quantity*product.price}
              </p>
            </span>
            
            </div>
          </div>
        ))}
        <span className="orderid">
          address
        </span>
        <div className="address">
        <span  >
        {order.order.details.firstName} &nbsp;{order.order.details.lastName}
          {order.order.details.address2},  {order.order.details.address}
        </span>
        <span>city:&nbsp;&nbsp;
        {order.order.details.city}, &nbsp;&nbsp; state:&nbsp;&nbsp;
        {order.order.details.state}
        </span>
        <span>
        Phone:&nbsp;&nbsp;
        {order.order.details.phone}, &nbsp;&nbsp;&nbsp;&nbsp; Email:&nbsp;&nbsp;
        {order.order.details.email}
        </span>
        </div>
        <div className="order-details methods">
        <span style={{width:"30%"}}>Shipping-Method: <p> {order.order.details.shippingMethod}</p></span><span style={{width:"30%"}}>payment-Method: <p> {order.order.details.paymentMethod}</p></span>
        </div>
      </div>
              ) : (<></>)}
        <div className="expand">
        <i className={`arrow ${expand ? "up" :"down"}`} onClick={()=>setexpand(!expand)}></i>
        </div>
      </div>

      
    </div>
  )
}

export default OrderItem