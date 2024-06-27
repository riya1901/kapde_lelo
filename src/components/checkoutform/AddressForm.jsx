import React, { useEffect, useState } from 'react';
import './checkoutform.css';


const AddressForm = ({ nextStep, handleChange, values }) => {
  const[filled,setfilled]=useState(false);
  const continueHandler = (e) => {
    e.preventDefault();
    
    if(filled)
    nextStep();
  else{
    alert("kindly fill all the fields")
  }

  };
  useEffect(()=>{
    if(values.address!=""&&values.email!=""&& values.city!=""&&values.state!=""&&values.pincode!=""&&values.firstName!=""&&values.address2!=""&&values.phone!="")
      setfilled(true)
    else
    setfilled(false)
  },[values])

  return (
    <form>
      <h2>Contact</h2>
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={values.email}
      />
      <label className='getupdate'>
        <input
          type="checkbox"
          name="getUpdates"
          onChange={handleChange}
          checked={values.getUpdates}
        />
    
        Get order updates
      </label>
      <h2>Shipping Address</h2>
      <select name="country" onChange={handleChange} value={values.country}>
        <option value="India">India</option>
        <option value="usa">usa</option>
        
      </select>
      <div className="name">

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={values.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={values.lastName}
      />
      </div>
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
        value={values.address}
      />
      <input
        type="text"
        name="address2"
        placeholder="Apartment, Suite, etc. (optional)"
        onChange={handleChange}
        value={values.address2}
      />
      <div className='city'>

      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
        value={values.city}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        onChange={handleChange}
        value={values.state}
      />
      <input
        type="text"
        name="pinCode"
        placeholder="Pin Code"
        onChange={handleChange}
        value={values.pinCode}
      />
      </div>
      <input
        type="text"
        name="phone"
        placeholder="Phone Number for order updates"
        onChange={handleChange}
        value={values.phone}
      />
<div className="btn-main">

      <button className="secondary" onClick={() => window.location.href = '#'}>Return to Shop</button>
      <button onClick={continueHandler}>Continue to Shipping</button>
</div>
    </form>
  );
};

export default AddressForm;
