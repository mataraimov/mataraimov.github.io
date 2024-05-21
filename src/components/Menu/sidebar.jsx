import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/TechTrack-Logo.png';

const Sidebar = () => {
  const [currentSection, setCurrentSection] = useState('ProductPage');

  return (
    <Menu>
      <div className="sidebarUl">
        <Link to="/">
          <img className="sidebarImage" src={logo} alt="" />
        </Link>
        <ul>
          <Link
            to="/item"
            className={currentSection === 'ProductPage' ? 'active' : 'categoryList'}
            onClick={() => setCurrentSection('ProductPage')}
          >
            <li>Product Page</li>
          </Link>
          <Link
            to="/cart"
            className={currentSection === 'OrderForm' ? 'active' : 'categoryList'}
            onClick={() => setCurrentSection('OrderForm')}
          >
            <li>Order Form</li>
          </Link>
          <Link
            to="/news"
            className={currentSection === 'NewsFeed' ? 'active' : 'categoryList'}
            onClick={() => setCurrentSection('NewsFeed')}
          >
            <li>News Feed</li>
          </Link>
          <Link
            to="/career"
            className={currentSection === 'ContactInfo' ? 'active' : 'categoryList'}
            onClick={() => setCurrentSection('ContactInfo')}
          >
            <li>Contact Information</li>
          </Link>
        </ul>
      </div>
    </Menu>
  );
};

export default Sidebar;
