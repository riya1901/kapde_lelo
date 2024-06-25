import React, { useEffect, useState } from 'react'
import './order.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';
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
                await axios.get(`http://localhost:5555/getorder/${user._id}`)

            setOrderData(response.data);
        } catch (err) {
            console.log(err.message);
        }
        setLoading(false);
    };
    if (loading)
        fetchData();
    console.log("order", orderData)


    return (
        <div className="profilepage">
            <div className="profile-main">
                <div className="main">
                    {(loading) ?
                        <div className='lmain'><Loader /></div> : <>your orders </>

                    }


                </div>
            </div>
        </div>
    )
}

export default Order