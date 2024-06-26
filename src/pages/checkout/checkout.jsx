import { useParams } from 'react-router-dom'
import './checkout.css'
import Out from '../../components/checkoutform/out'

function Checkout() {

    const { id, len,price } = useParams()
    
    return (
        
            <div className='cartPage'>
                <div className="cart-main">
                    <div className="title">Cart Summary</div>
                    <div className='bill-details'><p>total item = {len}</p> ${price}</div>
                </div>
                <div className="cart-main">
                    {
                        (id==null)?
                        (<Out total={price}/>):
                        (<Out id={id} total={price}/>)

                    }

                </div>
            </div>

    
    )
}

export default Checkout
