import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="footer ">
    <div className="container">
      <nav className="pull-left">
        <a rel="noopener" target="_blank" href="mailto:odelavia@gmail.com" className="sig">
          odelavia@gmail.com
        </a>
        <a  href="https://www.linkedin.com/in/oliver-de-la-via-9bb2b39a/" className="footer-aboutlink">
          LinkedIn
        </a>
        <a href="https://github.com/odelavia"  className="footer-bloglink">
          Github
        </a>
      </nav>
      <div className="copyright pull-right">
        <div className="footer-copy">
          &copy; 2018, made with  <i className="material-icons">love</i>
        </div>
        for a better web.
      </div>
    </div>
  </footer>

);

export default Footer;