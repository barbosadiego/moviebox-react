import React from 'react';

//css
import './Footer.scss';

//components
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';
import youtube from '../img/youtube.svg';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__social flex">
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <img src={instagram} alt="instagram" />
          </div>
          <div>
            <img src={twitter} alt="twitter" />
          </div>
          <div>
            <img src={youtube} alt="you tube" />
          </div>
        </div>
        <div className="footer__links">
          <ul className="flex">
            <li>
              <a href="#">Conditions of Use</a>
            </li>
            <li>
              <a href="#">Policy & Privacy</a>
            </li>
            <li>
              <a href="#">Press Room</a>
            </li>
          </ul>
        </div>
        <div className="footer__credits">
          <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
