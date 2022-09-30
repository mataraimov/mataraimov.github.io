import React from 'react';
import './Payment.css';
import { useDispatch } from 'react-redux';
import { clearitem } from './../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
const Payment = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="pay">
        <h3>Payment</h3>
        <input type="tel" placeholder="card number" />
        <input type="tel" placeholder="card holder" />
        <Link to="/">
          <button onClick={() => dispatch(clearitem())}>pay for the purchase</button>
        </Link>
      </div>
    </>
  );
};
export default Payment;
