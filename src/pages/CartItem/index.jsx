import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CartItem.module.scss';
import { additem, removeitem, minusitem } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import Modal from './../../components/Modal';
import { useAuth } from '../../hooks/isAuth';

import Payment from '../Payment';

export const CartItem = () => {
  const { isAuth, email } = useAuth();
  const [modalActive, setmodalActive] = React.useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { totalPrice } = useSelector((state) => state.cart);

  const addPlus = (el) => {
    dispatch(additem(el));
  };

  const addMinus = (id) => {
    dispatch(minusitem(id));
  };

  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(removeitem(id));
    }
  };

  const desiredQuantity = items.reduce((total, item) => total + item.count, 0);

  return (
    <>
      <div className={styles.div}>
        {items.map((el, i) => (
          <div className={styles.card} key={i}>
            <h4>{el.name}</h4>
            <div className={styles.cartBlock}>
              <div className={styles.cartBlockImg}>
                <Link to="/item">
                  <img src={el.imgUrl[0]} alt="" />
                </Link>
              </div>
              <div className={styles.cartBlockDescription}>
                <div>
                  <p className={styles.cartBlockRef}>REF. | 0210/581</p>
                  <p className={styles.cartBlockRef}>{el.color[0]}</p>
                  <button className={styles.cartBtn} onClick={() => addPlus(el)}>
                    +
                  </button>
                  <span className={styles.cartBlockRefCount}>{el.count}</span>
                  <button className={styles.cartBtn} onClick={() => addMinus(el.id)}>
                    -
                  </button>
                </div>
                <div className={styles.cartBlockRef}>{el.price * el.count} USD</div>
                <div>
                  <button className={styles.cartBlockDelete} onClick={() => deleteItem(el.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal active={modalActive} setactive={setmodalActive}>
        <Payment totalPrice={totalPrice} desiredQuantity={desiredQuantity} />
      </Modal>
      <div onClick={() => setmodalActive(true)} className={styles.total}>
        <span>Total: {totalPrice} usd</span>
        <button>continue</button>
      </div>
    </>
  );
};
