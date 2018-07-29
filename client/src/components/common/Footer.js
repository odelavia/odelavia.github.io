import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="footer ">
    <div className="container">
      <nav className="pull-left">
        <a href="https://www.oliverdelaviadev.com" className="sig">
          De La Via Studio
        </a>
        <Link  to="/about" className="footer-aboutlink">
          More About Me
        </Link>
        <a href="https://medium.com/@oliverdelavia"  className="footer-bloglink">
          Blog
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