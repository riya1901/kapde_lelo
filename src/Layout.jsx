import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function Layout({handlecategory,handlefilter,handleSearch,user}) {
  

  return (
   <>
   <Navbar handlecategory={handlecategory} handlefilter={handlefilter}  handleSearch={handleSearch} user={user} />
   <Outlet style={{height:"100vh"}}/>
   <Footer/>
   </>
  )
}

export default Layout