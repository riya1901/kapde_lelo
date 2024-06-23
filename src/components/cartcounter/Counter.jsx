import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removefromcart } from "../../Store/action";
import './counter.css'

const Counter = ({id}) => {
  const cart=useSelector((state) => state.cart);
 console.log("counter",cart)
 const temp= useSelector((state) => state.user[0]._id)
const user=temp==""?0:temp;
  const dispatch = useDispatch();
  return (
    <div className="cartcount">
      <button
        className="btn"
        onClick={() => {dispatch(removefromcart({id,user}))}}
      >
        -
      </button>
      {cart.map((item) => {
        if (item.id == id)
          return <span className="count" key={item.id}>{item.quantity}</span>;
      })}
      <button
        className="btn"
        onClick={() => dispatch(addtocart({id,user}))}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
