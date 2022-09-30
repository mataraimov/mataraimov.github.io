import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';
export const Form = ({ title, handleClick }) => {
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  return (
    <div className={styles.form__block}>
      {/* <p>log in</p> */}
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <Link to="/">
        <button onClick={() => handleClick(email, password)}>{title}</button>
      </Link>
    </div>
  );
};
