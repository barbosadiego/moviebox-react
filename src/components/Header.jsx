import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.scss';
import Logo from '../img/Logo.svg';

function Header() {
  const [searchInput, setSearchImput] = useState('');
  const navigate = useNavigate();

  function keyDown(e) {
    if (e.key === 'Enter') {
      navigate(`/search?q=${searchInput}`);
      setSearchImput('');
    }
  }

  return (
    <header className="header">
      <nav className="container flex">
        <div>
          <Link to="/moviebox-react">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <input
          className="header__input"
          type="text"
          placeholder="What do you want to watch?"
          value={searchInput}
          onChange={(e) => setSearchImput(e.target.value)}
          onKeyDown={keyDown}
        />

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
