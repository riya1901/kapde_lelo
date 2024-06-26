import React, { useEffect, useState } from 'react'
import './profile.css'
import Login from '../../components/login/login'
import { useDispatch, useSelector } from 'react-redux';
import Profileinfo from '../../components/profile/profileinfo';
import { setCart } from '../../Store/action';

function Profile({ userlogged }) {
  const [isuser, setisuser] = useState(false);
  const [keeplogged, setkeeplogged] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user)
  useEffect(() => {
    if (keeplogged && isuser) {
      const save = JSON.stringify(user)
      localStorage.setItem('user', save);
    }

  }, [keeplogged, isuser]);



  useEffect(() => {
    if (user._id != '' || (Object.keys(user).length != 0 && Object.keys(user).length != 14)) {
      dispatch(setCart(user._id));
      setTimeout(() => {
        setisuser(true)
      }, 200)
    }

    // else
    // setisuser(false)

  });

  useEffect(() => {
    userlogged(isuser)
    const changecart = async () => {

      await dispatch(setCart(user._id));
    }
    changecart();
  }, [isuser])

  return (
    <div className="profilepage">
      <div className="profile-main">
        <div className="main">

          {isuser ? (<Profileinfo user={user} setisuser={setisuser} />) : (<Login setuser={setisuser} setkeeplogged={setkeeplogged} />)}

        </div>
      </div>
    </div>
  )
}

export default Profile