import React from 'react';
import './checkoutform.css'

const ShippingForm = ({ nextStep, prevStep, handleChange, values }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };


  return (
    <form>
      <div className="step-info">
        <div>
        Email: <span>{values.email}</span>
        </div>
        <div>
        Contact: <span>{values.phone}</span>
        </div>
        
        
      </div>
      <h2>Shipping Method</h2>
      <label>Select Shipping Method</label>
      <select name="shippingMethod" onChange={handleChange} value={values.shippingMethod}>
        <option value="">Choose...</option>
        <option value="standard">Standard - Free</option>
        <option value="express">Express - $10</option>
        {/* Add more shipping methods as needed */}
      </select>
      <div className="btn-main">
      <button className="secondary" onClick={backHandler}>Information</button>
      <button onClick={continueHandler}>Select an option</button>
      </div>
    </form>
  );
};

export default ShippingForm;
