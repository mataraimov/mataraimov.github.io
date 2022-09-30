import React from 'react';
import './Modal.scss';
const Modal = ({ active, setactive, children }) => {
  return (
    <div onClick={() => setactive(false)} className={active ? 'modal active' : 'modal'}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={active ? 'modal__content active' : 'modal__content'}
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
