import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import Logo from '../img/Logo.svg';

function Header() {
  return (
    <header className="header">
      <nav className="container flex">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <input className='header__input' type="text" placeholder='What do you want to watch?'/>

        <div className="header__menu flex">
          <h3>Sing in</h3>
          <div className="btn">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
