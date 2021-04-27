import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import './Header.css';
const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const logOut = async () => {
    await auth.signOut().then(() => {
      dispatch({ type: 'SET_USER', username: null });
      console.log('Successfully logged out');
    });
  };
  return (
    <div className='header'>
      <input
        placeholder='Search for 60,000+ tutorials'
        type='search'
        className='header__searchInput'
      />
      <Link
        to='/'
        style={{ color: 'white', textDecoration: 'none', marginRight: '50px' }}
      >
        <p className='header__logo'>freeCodeCamp</p>
      </Link>

      <div className='header__buttons'>
        <button className='header__Button menu'>Menu</button>
        {user ? (
          <button onClick={logOut} className='header__Button signIn'>
            Logout
          </button>
        ) : (
          <Link to='/signin'>
            <button className='header__Button signIn'>Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
