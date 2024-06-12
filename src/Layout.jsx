import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function Layout({handlecategory,handlefilter,cart}) {
  
  return (
   <>
   <Navbar handlecategory={handlecategory} handlefilter={handlefilter} cart={cart} />
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout