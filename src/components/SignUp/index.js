import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './../../redux/slices//userSlice';
import { Form } from '../Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
const SignUp = ({ title, handleClick }) => {
  const dispatch = useDispatch();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          addUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
      })
      .catch(console.error);
  };
  return (
    <div>
      <Form title="register" handleClick={handleRegister} />
    </div>
  );
};
export default SignUp;
