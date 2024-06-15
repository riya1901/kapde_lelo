import React, { useState, useEffect,useCallback } from 'react'
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
import Hero from './components/hero/Hero.jsx'
import Category from './components/category/Category.jsx'
import ProductPage from './components/productpage/productPage.jsx';
import Cart from './components/cart/cart.jsx';
import Checkout from './components/checkout/checkout.jsx';

function App() {
  const [categoryvalue, setcategoryvalue] = useState("");
  const [filtereddata, updatefiltereddata] = useState(Productdata);
  const [search, setSearch] = useState("");

  function handlefilter() {
    setcategoryvalue("");
    updatefiltereddata(Productdata);
  }

  function handlecategory(event) {

    setcategoryvalue(event.target.innerHTML);
  }

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    const NewData = Productdata.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    updatefiltereddata(NewData);
  }, [search]);

  useEffect(() => {
    if (categoryvalue !== "") {
      const NewData = Productdata.filter(product => product.category === categoryvalue);
      updatefiltereddata(NewData);
    }
    else {
      updatefiltereddata(Productdata);
    }
  }, [categoryvalue]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout handlefilter={handlefilter} handlecategory={handlecategory}  handleSearch={handleSearch} />}>
        <Route path='' element={<Hero Productdata={filtereddata}  />} />
        <Route path='Mens/' element={<Category title="Mens Wear" Productdata={filtereddata} />} />
        <Route path='womens/' element={<Category title="womens Wear" Productdata={filtereddata}  />} />
        <Route path='kids/' element={<Category title="kids Wear" Productdata={filtereddata}/>} />
        <Route path='productpage/:id' element={<ProductPage />} />
        <Route path='cart/' element={<Cart />} />
        <Route path='checkout/' element={<Checkout />}>
        <Route path=':id' element={<Checkout />} />

        </Route>



      </Route>
    )
  );


  return (
    <RouterProvider router={router} />
  )
}

export default App