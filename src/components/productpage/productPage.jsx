import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './productPage.css';
import Productdata from '../../assets/productdata.json';
import { addtocart } from '../../Store/action.js';
import Category from '../category/Category.jsx';
import Counter from '../cartcounter/Counter.jsx';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const product = useMemo(() => Productdata.find(item => item.key == id), [id]);
  const Cart = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  function handlebuynow(){
    navigate(`/checkout/${id}`)
  }

  function handleaddtocart() {
    dispatch(addtocart({id}));
  }

  const isInCart = useMemo(
    () => Cart.find(item => item.product.id == id),
    [Cart, id]
  );

  return (
    <div className="ProductPage">
      <div className='product-main'>
        <div className='product'>
          <img src={product.image} alt="Cannot load" />
          <div className='details'>
            <p className='title'>{product.title}</p>
            <p className='special'>offer price</p>
            <p className='price'>
              MRP: <span className='offer'>${product.price}</span> 
              <span>{(product.price * 1.20).toFixed(2)}</span> 
              <span className='offer'>20% off</span>
            </p>
            <p className="review">
              {product.rating.rate}
              <span> &#9733;</span>&nbsp;&nbsp;
              {product.rating.count} reviews
            </p>
            <p className='desc'>{product.description}</p>
            <div className='buybtn'>
              {Object.keys(Cart).length > 0 && isInCart ? (
                <Counter id={id} />
              ) : (
                <button className="pushable" onClick={handleaddtocart}>
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front">Add to cart</span>
                </button>
              )}
              <button className="pushable" onClick={handlebuynow}>
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">Buy Now</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className='suggestion'>
          <Category title="Things you might like" Productdata={Productdata} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
