import React, { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import ShippingForm from './ShipingForm';
import './checkoutform.css';
import { useDispatch, useSelector } from "react-redux";
import {  newOrder, buyNowcart} from "../../Store/action";
import { useNavigate } from 'react-router-dom';
const Out = ({id=0,total}) => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    email: '',
    getUpdates: false,
    country: 'India',
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    pinCode: '',
    phone: '',
    shippingMethod: '',
    paymentMethod: 'creditCard',
  });
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const Cart = useSelector((state) => state.cart);
  const user=useSelector((state) => state.user._id)


  const nextStep = async() => {   if(step==3){
    if(id!=0){
      const index = Cart.findIndex(item => item.id == id)

      const temp = [{ item:Cart[index].id, quantity: Cart[index].quantity }]
      const order={
        orderItems:temp,
        user:user,
        details:formValues,
        total:total
      }

      dispatch(buyNowcart(id,order))
    }
    else{
      
      const temp = await Promise.all(
        Cart.map(async (item) => {
            return { item:item.id, quantity: item.quantity };
        })
      );
       
      const order={
        orderItems:[...temp],
        user:user,
        details:formValues,
        total:total

      }
      await dispatch(newOrder(order))
    }


    alert("order has been sucessfully placed");
    navigate('/');
    window.scrollTo(0, 0);
    
    
  }setStep((prevStep) => prevStep + 1)};
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e) => {
 
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <AddressForm nextStep={nextStep} handleChange={handleChange} values={formValues} />;
      case 2:
        return <ShippingForm nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />;
      case 3:
        return <PaymentForm nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formValues} />;
      default:
        return <AddressForm nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    }
  };

  return (
    <div className="out">
      <div>
        <div className="progress-bar">
        <div className="progress-bar-inner" style={{ width: `${(step / 3) * 100}%` }}></div>
      </div>

      </div>
      {(step<=3)?renderStep():setStep(1)}
    </div>
  );
};

export default Out;
