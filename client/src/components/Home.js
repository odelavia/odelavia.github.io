import React from 'react';
import Hero from './common/Hero.js'
import AboutContainer from './about/AboutContainer.js'
import Projects from './projects/Projects.js';
import Blog from './blog/Blog';
import Contact from './contact/Contact.js';
const Home = () => (
  <div>
    <Hero />
    <AboutContainer />
    <Projects />
    <Blog />
    <Contact />
  </div>
);

export default Home;