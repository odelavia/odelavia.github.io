import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Home from '../components/Home';
import Resume from '../components/Resume';
import Projects from '../components/projects/Projects'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'
import Footer from '../components/common/Footer'

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route path="/blog" component={Blog} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRoutes;