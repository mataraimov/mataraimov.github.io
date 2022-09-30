import logo from '.././assets/images/logo.png';
import { Link } from 'react-router-dom';
import React from 'react';
// import Search from './Search';
import { useAuth } from '../hooks/isAuth';
import bag from '../assets/images/bag.png';
import Menu from './Menu';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeUser } from '../redux/slices/userSlice';
import Modal from './Modal';
function Header() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const { totalPrice, items } = useSelector((state) => state.cart);

  return (
    <div className="header">
      <div className="container">
        <Menu />
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Pizza logo" />
          </Link>
        </div>
        <div className="header__cart">
          {isAuth ? (
            <button className="search__button" onClick={() => dispatch(removeUser())}>
              log out from {email}
            </button>
          ) : (
            <Link to="/login">
              <button className="search__button">login</button>
            </Link>
          )}
          <Link to="/search">
            <button className="search__button">search</button>
          </Link>
          <Link to="/cart" className="button button--cart">
            <img src={bag} alt="" />
            <span>{items.reduce((sum, obj) => obj.count + sum, 0)}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
