import React from 'react';
import Hero from './Hero.js'
import AboutContainer from './about/AboutContainer'
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
const Home = () => (
  <div>
    <Hero />
    <AboutContainer />
    <Projects />
    <Contact />
  </div>
);

export default Home;