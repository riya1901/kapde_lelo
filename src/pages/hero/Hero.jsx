import React from 'react'
import Carousel from '../../components/carosel/Carousel.jsx'
import Category from '../../components/category/Category.jsx'


function Hero({Productdata,categoryvalue}) {
  return (
    <>
    <Carousel/>
    <Category title={`${(Productdata=="")?`No product`:`Trending`}`} categoryvalue={categoryvalue}  />
  
    </>
  )
}

export default Hero