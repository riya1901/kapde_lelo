import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './productPage.css';
import { addItem } from '../../Store/action.js';  // Ensure the correct path
import Category from '../../components/category/Category.jsx';
import Counter from '../../components/cartcounter/Counter.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
  const [product, setProduct] = useState({});
  const [loading, isLoading] = useState(true)
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Cart = useSelector((state) => state.cart);
  const temp = useSelector((state) => state.user._id)
  const user = temp == "" ? 0 : temp;

  useEffect(() => {
    if (product == null)
      isLoading(true)
  })
  const fetchProduct = () => {

    axios.get(`https://kapde-lelo-server.onrender.com/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        isLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  if (loading) {
    fetchProduct();
  }

  const handleBuyNow = () => {
    navigate(`/checkout/${id}/1/${product.price}`);
  }

  const handleAddToCart = () => {
    dispatch(addItem(id, user));
  }

  const isInCart = useMemo(
    () => Cart.find(item => item.id == id),
    [Cart, id]
  );

  return (
    <div className="ProductPage">
      <div className='product-main'>
        <div className='product'>
          {product.image ? (
            <>
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
                  {product.rating?.rate}
                  <span> &#9733;</span>&nbsp;&nbsp;
                  {product.rating?.count} reviews
                </p>
                <p className='desc'>{product.description}</p>
                <div className='buybtn'>
                  {isInCart ? (
                    <Counter id={id} />
                  ) : (
                    <button className="pushable" onClick={handleAddToCart}>
                      <span className="shadow"></span>
                      <span className="edge"></span>
                      <span className="front">Add to cart</span>
                    </button>
                  )}
                  <button className="pushable" onClick={handleBuyNow}>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front">Buy Now</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <hr className="divider" />
        <div className='suggestion'>
          <Category title="Things you might like" categoryvalue={""} search={""} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
