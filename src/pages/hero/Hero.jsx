import Carousel from '../../components/carosel/Carousel.jsx'
import Category from '../../components/category/Category.jsx'


import { setCart, setUser } from '../../Store/action.js';
function Hero({Productdata,categoryvalue,search}) {
 
  return (
    <>{search==""?<Carousel/>:<></>}
    
    <Category title={`${(Productdata=="")?`No product`:`Trending`}`} categoryvalue={categoryvalue} search={search} />
  
    </>
  )
}

export default Hero