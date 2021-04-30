import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import './Register.css';
const Register = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  const history = useHistory();

  if (user) {
    history.replace('/');
  }
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const headerStyle = {
    width: '100%',
    backgroundColor: '#0A0A23',
    textAlign: 'center',
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
    fontSize: '30.6px',
    paddingTop: '1px',
    paddingBottom: '1px',
  };

  // auth handling functions
  const signIn = async (e) => {
    e.preventDefault();
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.goBack();
      })
      .catch((error) => {
        alert(error.message);
        setEmail('');
        setPassword('');
      });
  };

  const register = async (e) => {
    e.preventDefault();
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser.user);
        history.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <Link className='header__link' style={headerStyle} to='/'>
        freeCodeCamp
      </Link>
      <div className='register'>
        <header>freeCodeCamp.org</header>
        <article>
          Join a community of millions of people learning to code together for
          free
        </article>

        <form onSubmit={signIn}>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
          <article>
            By continuing, you indicate that you have read and agree to
            freeCodeCamp.org's Terms of Service and Privacy Policy.
          </article>
          <button
            className='register__signinButton'
            onClick={signIn}
            type='submit'
          >
            Login
          </button>
          <button className='register__registerButton' onClick={register}>
            Register{' '}
            <small>
              (register here only by simply providing email and password)
            </small>
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
