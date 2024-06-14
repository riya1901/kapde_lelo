import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removefromcart } from "../../Store/action";
import './counter.css'

const Counter = ({id}) => {
  const cart=useSelector((state) => state);

 
 
  const dispatch = useDispatch();
  return (
    <div className="cartcount">
      <button
        className="btn"
        onClick={() => dispatch(removefromcart(id))}
      >
        -
      </button>
      {cart.map((item) => {
        if (item.product.id == id)
          return <span className="count" key={item.product.id}>{item.quantity}</span>;
      })}
      <button
        className="btn"
        onClick={() => dispatch(addtocart({id}))}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
