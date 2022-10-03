import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItem } from './../../redux/slices/infoSlice';
import { additem } from '../../redux/slices/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Pizza(el) {
  const dispatch = useDispatch();
  const setset = (el) => {
    dispatch(setItem(el));
  };
  const addToBasket = (el) => {
    dispatch(additem(el));
    notify();
  };
  const notify = () => {
    toast('Item is added to basket!');
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-up" className="pizza-block" onClick={() => setset(el)}>
      <Link to="/item">
        <img className="pizza-block__image" src={el.imgUrl[0]} alt="Item" />
      </Link>
      <h4 className="pizza-block__title">
        {el.name}
        <span className="pizza-block__price">{el.price}USD</span>
        <div className="material-icons plus" onClick={() => addToBasket(el)}>
          add
        </div>
      </h4>
      <div className="card__colors">
        {el.color.map((el, i) => (
          <div
            key={i}
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: `${el}`,
              borderRadius: '50%',
              border: '1px solid gray',
              margin: '2px',
            }}
          ></div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
export default Pizza;
