import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import { useDispatch } from 'react-redux';
import { setCart, setUser } from './Store/action.js';

function Layout({handlecategory,handlefilter,handleSearch}) {
  

  return (
   <>
   <Navbar handlecategory={handlecategory} handlefilter={handlefilter}  handleSearch={handleSearch}  />
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout