import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      <input
        placeholder='Search for 60,000+ tutorials'
        type='search'
        className='header__searchInput'
      />
      <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
        <p className='header__logo'>freeCodeCamp</p>
      </Link>

      <div className='header__buttons'>
        <button className='header__Button menu'>Menu</button>
        <Link to='/signin'>
          <button className='header__Button signIn'>Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
