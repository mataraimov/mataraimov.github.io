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
        <p className={styles.login__block_p}>log in</p>
        <Form title="sign in" handleClick={handleLogin} />
        <p className={styles.login__block_p}>
          Didn`t have any account?
          <Link to="/register">
            <span className={styles.registerBtnspan}>register now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
//<div className={styles.register__block}>
{
  /* <Link to="/register">
          <button>register</button>
        </Link> */
}
// </div>
