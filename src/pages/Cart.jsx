import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './CartItem';
const Cart = () => {
  // const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="cartcart">
      <span>
        Cart{items.length !== 0 ? `(${items.reduce((sum, obj) => obj.count + sum, 0)})` : ''}
      </span>
      <hr />
      {items.length !== 0 ? <CartItem /> : <p className="cart_p">Your busket is empty</p>}
    </div>
  );
};
export default Cart;
