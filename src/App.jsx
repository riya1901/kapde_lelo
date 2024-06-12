import React,{ useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Layout from './Layout.jsx'
import Productdata from "./productdata.json";
import {
  createBrowserRouter,
  createRoutesFromElements,

  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from './components/hero/Hero.jsx'
import Category from './components/category/Category.jsx'

function App() {
  const [categoryvalue, setcategoryvalue] = useState("");
  const [filtereddata, updatefiltereddata] = useState(Productdata);
  const [cart, updatecart] = useState([]);

  function handleclearcategory() {
    setcategoryvalue("");  }

  function handlecategory(event,clear=false) {
    if(clear==true){
      setcategoryvalue("");
    }
    setcategoryvalue(event.target.innerHTML);
    }

    useEffect(() => {
      if (categoryvalue !== "") {
        const NewData = Productdata.filter(product => product.category === categoryvalue);
        updatefiltereddata(NewData);
      }
      else{
        updatefiltereddata(Productdata);
      }
    }, [categoryvalue]);

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout handlefilter={handleclearcategory} handlecategory={handlecategory} cart={Object.keys(cart).length} />}>
      <Route path='' element={<Hero Productdata={filtereddata} cart={cart} updatecart={updatecart}/>}/>
      <Route path='Mens/' element={<Category title="Mens Wear" Productdata={filtereddata}/>}/>
      <Route path='womens/' element={<Category title="womens Wear" Productdata={filtereddata}/>}/>
      <Route path='kids/' element={<Category title="kids Wear" Productdata={filtereddata}/>}/>
      </Route>
    )
    );


  return (
    <RouterProvider router={router} />
  )
}

export default App
