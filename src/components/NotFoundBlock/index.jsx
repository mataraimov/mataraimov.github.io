import React from 'react';
import stylesmyles from './NotFound.module.scss';
import { Link } from 'react-router-dom';
const NotFoundBlock = () => {
  return (
    <div className={stylesmyles.root}>
      <div className={stylesmyles.pnf}>
        <h3>Page not found</h3>
        <p>WE ARE SORRY BUT THIS PAGE IS NO LONGER AVAILABLE ON OUR WEB SITE.</p>
        <div className={stylesmyles.btn}>
          <Link to="/">
            <button>go to home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundBlock;
