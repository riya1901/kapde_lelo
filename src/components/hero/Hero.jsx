import React from 'react'
import Carousel from '../carosel/Carousel'
import Category from '../category/Category.jsx'


function Hero({Productdata,updatecart,cart}) {
  return (
    <>
    <Carousel/>
    <Category title="Trendings" Productdata={Productdata} updatecart={updatecart} cart={cart}/>
    </>
  )
}

export default Hero