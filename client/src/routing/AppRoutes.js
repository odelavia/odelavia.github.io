import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Home from '../components/Home';
import Resume from '../components/Resume';
import Four04 from '../components/Four04';
// import Projects from '../components/projects/Projects'
// import Blog from '../components/blog/Blog'
// import Contact from '../components/contact/Contact'
import Footer from '../components/common/Footer'

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="*" component={Four04} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRoutes;