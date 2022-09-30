import React from 'react';
import './Payment.css';
// import Payment from '../Payment';
import { Link } from 'react-router-dom';
const Payment = ({ setactive }) => {
  return (
    <>
      <div className="pay">
        <h3>Payment</h3>
        <input type="tel" placeholder="card number" />
        <input type="tel" placeholder="card holder" />
        <Link to="/">
          <button onClick={() => setactive(false)}>pay for the purchase</button>
        </Link>
      </div>
    </>
  );
};
export default Payment;
