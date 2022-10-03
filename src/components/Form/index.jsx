import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';
export const Form = ({ title, handleClick }) => {
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [robot, setrobot] = React.useState(false);
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
      <div className={styles.block_ch}>
        <p className={styles.block_df}>im not a robot</p>
        <input
          value={robot}
          onChange={(e) => setrobot(e.target.value)}
          type="checkbox"
          name=""
          id=""
        />
      </div>
      <Link to="/">
        {robot && (
          <button className={styles.block_p} onClick={() => handleClick(email, password)}>
            {title}
          </button>
        )}
      </Link>
    </div>
  );
};
