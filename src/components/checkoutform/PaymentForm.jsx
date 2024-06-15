import React from 'react';
import './checkoutform.css';


const PaymentForm = ({ nextStep, prevStep, handleChange, values }) => {
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
        <span>Email:</span> <span>{values.email}</span>
        </div>
        <div>
        <span>Contact:</span> <span>{values.phone}</span>
        </div>
        <div>

        <span>Method:</span> <span>{values.shippingMethod === 'standard' ? 'Standard - Free' : 'Express -$10'}</span>
        </div>
      </div>
      <div className="payment">
        <div className="desc">
      <h2>Payment</h2>
      <p>All payments are secure and encrypted</p>

        </div>
      <label>Select a payment method:</label>
      <div className="paymentOption">
      <div>
        <input
          type="radio"
          name="paymentMethod"
          value="creditCard"
          onChange={handleChange}
          checked={values.paymentMethod === 'creditCard'}
        /> <span>Credit Card</span>
      </div>
      <div>
        <input
          type="radio"
          name="paymentMethod"
          value="debitCard"
          onChange={handleChange}
          checked={values.paymentMethod === 'debitCard'}
        /> <span>Debit Card</span>
      </div>
      <div>
        <input
          type="radio"
          name="paymentMethod"
          value="netBanking"
          onChange={handleChange}
          checked={values.paymentMethod === 'netBanking'}
        /> <span>Net Banking</span>
      </div>
      <div>
        <input
          type="radio"
          name="paymentMethod"
          value="upi"
          onChange={handleChange}
          checked={values.paymentMethod === 'upi'}
        /> <span>UPI</span>
      </div>
      </div>
  
      </div>
      <div className="btn-main">

      <button className="secondary" onClick={backHandler}>Shipping</button>
      <button className="pay" onClick={continueHandler}>Pay Now</button>
      </div>

    </form>
  );
};

export default PaymentForm;
