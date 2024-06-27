import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Layout from './Layout.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from './pages/hero/Hero.jsx'
import Category from './components/category/Category.jsx'
import ProductPage from './pages/productpage/productPage.jsx';
import Cart from './pages/cart/cart.jsx';
import Checkout from './pages/checkout/checkout.jsx';
import Profile from './pages/user/Profile.jsx';
import Loader from './components/loader/loader.jsx';
import { useDispatch } from 'react-redux';
import { setCart, setUser } from './Store/action.js';
import Order from './pages/order/order.jsx';

function App() {
  const [categoryvalue, setcategoryvalue] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(true);
  const [userlogged, setuserlogged] = useState(false)

  const dispatch = useDispatch();


  function handlefilter() {
    setcategoryvalue("");
  }

  function handlecategory(event) {
    setcategoryvalue(event.target.innerHTML);
  }

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);







  useEffect(() => {
    const fetch = async () => {
      const items = await localStorage.getItem('user');
      if (items) {
        setuserlogged(true)
        const parsed = JSON.parse(items)
        setTimeout(() => {

          setloading(false)
        }, 1000);
        dispatch(setUser(parsed))
        dispatch(setCart(parsed._id));
      }
      else {

        setTimeout(() => {
          setloading(false)
        }, 1000);
      }


    }

    fetch();
  })
  if (loading) {

    return (<div className='lmain'><Loader /></div>
    );
  }






  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path='/' element={<Layout handlefilter={handlefilter} handlecategory={handlecategory} handleSearch={handleSearch} user={userlogged} />}>
        <Route path='' element={<Hero categoryvalue={categoryvalue} search={search} />} />
        <Route path='Mens/' element={<Category title="Mens Wear" categoryvalue={categoryvalue} search={search} />} />
        <Route path='womens/' element={<Category title="womens Wear" categoryvalue={categoryvalue} search={search} />} />
        <Route path='kids/' element={<Category title="Jewelery" categoryvalue={categoryvalue} search={search}/>}  />
        <Route path='productpage/:id' element={<ProductPage />} />
        <Route path='cart/' element={<Cart />} />
        <Route path='checkout/:id?/:len/:price' element={<Checkout />}>
          <Route path=':id' element={<Checkout />} />
        </Route>
        <Route path='user/' element={<Profile userlogged={setuserlogged} />} />
        <Route path='user/orders' element={<Order />} />

      </Route>
    )
  );

  if (loading) {
    return <Loader />;
  }
  return (


    <RouterProvider router={router} />
  )
}

export default App