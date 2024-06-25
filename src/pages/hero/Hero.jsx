import React, { useEffect, useState } from 'react'
import Carousel from '../../components/carosel/Carousel.jsx'
import Category from '../../components/category/Category.jsx'
import { useDispatch } from 'react-redux'


import { setCart, setUser } from '../../Store/action.js';
import Loader from '../../components/loader/loader.jsx';
function Hero({Productdata,categoryvalue}) {
 
  return (
    <>
    <Carousel/>
    <Category title={`${(Productdata=="")?`No product`:`Trending`}`} categoryvalue={categoryvalue}  />
  
    </>
  )
}

export default Hero