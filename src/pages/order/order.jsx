import React, { useEffect, useState } from 'react'
import './order.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';
import OrderItem from '../../components/orderItem/orderItem';
function Order() {
    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState();
    const user = useSelector((state) => state.user)


    useEffect(() => {
        if (orderData == null)
            setLoading(true)
    })
    const fetchData = async () => {

        try {
            const response =
                await axios.get(`https://kapde-lelo-server.onrender.com/getorder/${user._id}`)

            setOrderData(response.data);
        } catch (err) {
            console.log(err.message);
        }
        setLoading(false);
    };
    if (loading)
        fetchData();


    return (
        <div className="profilepage">

            <div className="main">
                {(loading) ? (

                    <div className='lmain'><Loader /></div>
                ) : (
                    orderData.map((order) => (
                        

                        <OrderItem key={order._id} order={order} />
                    ))
                )


                }


            </div>

        </div>
    )
}

export default Order