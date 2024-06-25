import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Layout from './Layout.jsx'
import Productdata from "./assets/productdata.json";
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
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setCart, setUser } from './Store/action.js';

function App() {
  const [categoryvalue, setcategoryvalue] = useState("");
  const [filtereddata, updatefiltereddata] = useState();
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(true);
  const temp = useSelector((state) => state.user._id)
  const user = temp == "" ? 0 : temp;

  const dispatch = useDispatch();


  function handlefilter() {
    setcategoryvalue("");
  }

  function handlecategory(event) {
    setcategoryvalue(event.target.innerHTML);
    console.log("App cat value", categoryvalue)
  }

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);


  useEffect(() => {
    const NewData = Productdata.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    updatefiltereddata(NewData);
  }, [search]);





  useEffect(() => {
    const fetch = async () => {
      const items = await localStorage.getItem('user');
      console.log("app fetch", items)
      if (items) {
        const parsed = JSON.parse(items)
        console.log("setcart", parsed)
        setTimeout(() => {

          setloading(false)
        }, 200);
        dispatch(setUser(parsed))
        dispatch(setCart(parsed._id));
      }
      else {

        setTimeout(() => {
          setloading(false)
        }, 200);
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

      <Route path='/' element={<Layout handlefilter={handlefilter} handlecategory={handlecategory} handleSearch={handleSearch} />}>
        <Route path='' element={<Hero categoryvalue={categoryvalue} />} />
        <Route path='Mens/' element={<Category title="Mens Wear" categoryvalue={categoryvalue} />} />
        <Route path='womens/' element={<Category title="womens Wear" categoryvalue={categoryvalue} />} />
        <Route path='kids/' element={<Category title="kids Wear" categoryvalue={categoryvalue} />} />
        <Route path='productpage/:id' element={<ProductPage />} />
        <Route path='cart/' element={<Cart />} />
        <Route path='checkout/:id?/:len/:price' element={<Checkout />}>
          <Route path=':id' element={<Checkout />} />
        </Route>
        <Route path='user/' element={<Profile />} />
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