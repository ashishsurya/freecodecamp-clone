import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      <input placeholder='Search for 60,000+ tutorials' type='search' className='header__searchInput' />
      <p className='header__logo'>freeCodeCamp</p>
      <div className='header__buttons'>
        <button className='header__Button menu'>Menu</button>
        <button className='header__Button signIn'>Sign in</button>
      </div>
    </div>
  );
};

export default Header;
