import React, { Component } from 'react';
import Hero from './Hero.js'
import AboutContainer from './about/AboutContainer'
import Projects from './projects/Projects.js';
import Blog from './blog/Blog'
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