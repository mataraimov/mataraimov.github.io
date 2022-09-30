import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './../../redux/slices//userSlice';
import { Form } from '../Form';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './Login.module.css';
const Login = ({ title, handleClick }) => {
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          addUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
      })
      .catch(() => alert('invalid login or password'));
  };
  return (
    <div className={styles.main__block}>
      <div className={styles.login__block}>
        <p>log in</p>
        <Form title="sign in" handleClick={handleLogin} />
      </div>
      <div className={styles.register__block}>
        <Link to="/register">
          <button>register</button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
