import React, { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import ShippingForm from './ShipingForm';
import './checkoutform.css';
import { useDispatch } from "react-redux";
import { removefromcart ,clearCart} from "../../Store/action";
import { useNavigate } from 'react-router-dom';
const Out = ({id=0}) => {
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

  const nextStep = () => {   if(step==3){
    if(id!=0){
      dispatch(removefromcart(id))

    }
    else{
      dispatch(clearCart())
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
