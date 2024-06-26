import React,{useEffect,useState,useRef}from 'react'
import './card.css';
import Counter from '../cartcounter/Counter.jsx';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Store/action.js";
import { useNavigate } from 'react-router-dom';

function Card({ id,name,price,img}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  const Cart=useSelector((state) => state.cart)
  const temp= useSelector((state) => state.user._id)
const user=temp==""?0:temp;
console.log("card user",user)


  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = -170;

        const isVisible = elementTop < windowHeight - elementVisible;
        setIsVisible(isVisible);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleaddtocart() {
console.log("card id",id)

    dispatch(addItem(id,user));

  }
  function handCick() {
    navigate(`/productpage/${id}`);
  window.scrollTo(0, 0);

  }
console.log("cart",Cart)

  return (
    <div>
     
      
      <div className={`card ${isVisible ? "active" :""}`} ref={elementRef} >
        <div className="card-img"onClick={handCick}>
          <img src={img} alt="" /></div>
        <div className="desc">
          <div className="card-title" onClick={handCick}>{name}</div>
          <hr className="card-divider"></hr>
          <div className="card-footer">
            <div className="card-price"><span>$</span> {price}</div>

            {Object.keys(Cart).length > 0 &&
              Cart.find(
                (item) => item.id ==id
              ) ? (
                <Counter id={id}/>
              ) : (
                
            <button className="card-btn" onClick={() => handleaddtocart()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
          </button>
                  
                
              )}

          </div>
        </div>


      </div>

    </div>
  )
}

export default Card