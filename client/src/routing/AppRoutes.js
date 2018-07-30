import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Home from '../components/Home';
import Skills from '../components/Skills'
import Projects from '../components/projects/Projects'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'
import Footer from '../components/common/Footer'

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRoutes;