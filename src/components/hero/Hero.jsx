import React from 'react'
import Carousel from '../carosel/Carousel'
import Category from '../category/Category.jsx'


function Hero({Productdata,updatecart}) {
  return (
    <>
    <Carousel/>
    
    <Category title={`${(Productdata=="")?`No product`:`Trending`}`} Productdata={Productdata} updatecart={updatecart} />
  
    </>
  )
}

export default Hero