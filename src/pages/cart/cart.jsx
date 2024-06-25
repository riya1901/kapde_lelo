import { useEffect, useState } from 'react';
import './cart.css';
import { useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const Cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    async function find(id) {
        try {
            const response = await axios.get(`http://localhost:5555/product/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    useEffect(() => {
        const updateCartItems = async () => {
            if (Cart.length === 0) {
                setCartItems([]);
                setTotalPrice(0);
            } else {
                const temp = await Promise.all(
                    Cart.map(async (item) => {
                        const product = await find(item.id);
                        return { ...product, quantity: item.quantity };
                    })
                );
                setCartItems(temp);
                const total = temp.reduce((total, item) => total + item.price * item.quantity, 0);
                setTotalPrice(total);
            }
        };

        updateCartItems();
    }, [Cart]);

    const handleCheckout = () => {
        navigate(`/checkout/${cartItems.length}/${totalPrice}`);
    }

    return (
        <div className='cartPage'>
            <div className="cart-main">
                <div className="title">Cart Items</div>
                <hr className="divider" />
                <div className="items">
                    {cartItems.length === 0 ? (
                        <div className='title'>Cart Empty</div>
                    ) : (
                        cartItems.map((product, index) => (
                            <Card
                                key={index}
                                id={product._id}
                                img={product.image}
                                name={product.title}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        ))
                    )}
                </div>
            </div>
            <div className="cart-main">
                <div className="bill">
                    <div className="title">Cart Invoice</div>
                    <hr className="divider" />
                    <div className="invoice-details">
                        <p>Total Items: {cartItems.length}</p>
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            {cartItems.length > 0 && (
                <div className="checkoutbtn" onClick={handleCheckout}>
                    <button className="animated-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span className="text">CHECKOUT</span>
                        <span className="circle"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>

                </div>
            )}
        </div>
    );
}

export default Cart;
