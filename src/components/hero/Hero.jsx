import React from 'react'
import Carousel from '../carosel/Carousel'
import Category from '../category/Category.jsx'


function Hero({Productdata}) {
  return (
    <>
    <Carousel/>
    <Category title="Trendings" Productdata={Productdata}/>
    </>
  )
}

export default Hero