import React from 'react';
import heroImage from '../../assets/img/splash.png'

const Hero = () => (
  <div className="section" id="top">
  <div className="hero">
    <div className="container full">
      <div className="content">
        <div className="splash-image">
          <img src={heroImage} alt="portrait" />
        </div>
        <div className="tagline">
          <h1>Hi, I'm Oliver!</h1> <br/>
          <h1>I'm Passionate about implementing creative solutions for the digital world.</h1>
        </div>
        <ul className="social">
          <li>
            <a href="https://github.com/odelavia" className="special" target="_blank" rel="noopener noreferrer">github</a>
          </li>
          <li>
            <a href="https://twitter.com/odelavia" className="special" target="_blank" rel="noopener noreferrer">twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
);

export default Hero;
