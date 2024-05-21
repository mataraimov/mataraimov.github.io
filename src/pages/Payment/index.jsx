import React, { useState } from 'react';
import './Payment.css';
import { useDispatch } from 'react-redux';
import { clearitem } from './../../redux/slices/cartSlice';

const Payment = ({ totalPrice, desiredQuantity }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;

    if (!formData.name.trim()) {
      setError('Please enter your name');
      isValid = false;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email');
      isValid = false;
    }

    return isValid;
  };

  const handlePayment = () => {
    if (validateForm()) {
      // Perform payment processing here
      dispatch(clearitem());
    }
  };

  return (
    <>
      <div className="pay">
        <h3>Payment</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div>
          <p>Desired Quantity: {desiredQuantity}</p>
          <p>Total Price: {totalPrice} USD</p>
        </div>
        {error && <p className="error">{error}</p>}
        <div>
          <button onClick={handlePayment}>Pay for the Purchase</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
