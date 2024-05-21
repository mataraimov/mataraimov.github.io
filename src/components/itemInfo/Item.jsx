import React from 'react';
import styles from './Item.module.scss';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { additem } from '../../redux/slices/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export const Item = () => {
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(additem(Item));
    notify();
  };
  const notify = () => {
    toast('Item is added to basket!');
  };
  const Item = useSelector((state) => state.info.item);
  const itemName = useSelector((state) => state.info.item.name);
  const itemPrice = useSelector((state) => state.info.item.price);
  const itemDescription = useSelector((state) => state.info.item.description);
  const itemUrl = useSelector((state) => state.info.item.imgUrl);

  const itemColor = useSelector((state) => state.info.item.color);
  const itemSizes = useSelector((state) => state.info.item.size);
  const [first, setfirst] = React.useState(0);
  const [urlList, seturlList] = React.useState(true);
  const nxtBtn = () => {
    if (first === itemUrl.length - 1) {
      setfirst(0);
    } else {
      setfirst(first + 1);
    }
  };
  const prvsBtn = () => {
    if (first === 0) {
      setfirst(itemUrl.length - 1);
    } else {
      setfirst(first - 1);
    }
  };

  // console.log(anotherUrl);
  return (
    <div className={styles.div}>
      <div className={styles.imgSlider}>
        <img src={itemUrl[first]} alt="" />
        <button onClick={prvsBtn} className={`material-symbols-outlined ${styles.bt1}`}>
          arrow_back_ios
        </button>
        <button onClick={nxtBtn} className={`material-symbols-outlined ${styles.bt2}`}>
          arrow_forward_ios
        </button>
      </div>
      <div className={styles.infodiv}>
        <div>
          <span>{itemName}</span>
          <p>{itemPrice} usd</p>
          <div className={styles.colors}>
            {itemColor.map((el, i) => (
              <div
                key={i}
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: `${el}`,
                  borderRadius: '50%',
                  border: '1px solid gray',
                  margin: '4px',
                }}
              ></div>
            ))}
            <button className="material-icons plus1" onClick={() => seturlList(!urlList)}>
              change_circle
            </button>
          </div>
          <p>
            Sizes:
            {itemSizes.map((el, i) => (
              <div key={i}>{el}</div>
            ))}
          </p>
        </div>
        <div>
          <button className="addToBasket" onClick={addToBasket}>
            add to basket
          </button>
          <h4 className="item-description">{itemDescription}</h4>
          <p>MATERIALS AND CARE</p>
          <h4>JOIN LIFE</h4>
          <h5>Care for fiber & water: at least 20% recycled cotton.</h5>
          <h5>OUTER SHELL</h5>
          <h5>100% cotton</h5>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
// MATERIALS AND CARE
// JOIN LIFE
// Care for fiber & water: at least 20% recycled cotton.

// We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products.
// MATERIALS
// We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.

// To assess compliance, we have developed a programme of audits and continuous improvement plans.
// OUTER SHELL
// 100% cotton
