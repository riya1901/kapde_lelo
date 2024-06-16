import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function Layout({handlecategory,handlefilter,handleSearch,userValue,handleUserValue}) {
  
  return (
   <>
   <Navbar handlecategory={handlecategory} handlefilter={handlefilter}  handleSearch={handleSearch} uservalue={userValue} handleUserValue={handleUserValue} />
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout