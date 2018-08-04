import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { openNav, closeNav } from '../../actions';
import OutsideAlerter from '../common/OutsideAlerter';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      right: 300,
      scrolledDown: false,
    }
    this.openNav = this.openNav.bind(this)
    this.onScrollColorChange = this.onScrollColorChange.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.onScrollColorChange)
  }
  componentWillUnmount(){
    window.addEventListener('scroll', this.onScrollColorChange)
  }

  openNav() {
    if (this.props.navOpen == true) {
      this.props.dispatch(closeNav())
    } else if (this.props.navOpen == false) {
      this.props.dispatch(openNav())
    }
  };

  onScrollColorChange() {
    let lastScrollY = window.scrollY
    // console.log (lastScrollY)
    if (this.state.scrolledDown == false ) {
      if (lastScrollY > 100 ) {
        this.setState ({
          scrolledDown: true,
        })
      }
      return
    } else if (this.state.scrolledDown == true ) {
      if (lastScrollY <= 100 ) {
        this.setState ({
          scrolledDown: false,
        })
      }
      return
    }
  }

  render() {
    return (
      <nav id="sectionsNav"
        className={this.state.scrolledDown ? 'navbar-color-on-scroll' : 'navbar-transparent'}
        onScroll={this.onScrollColorChange}
      >
        <div className="navbar-container">
          <div className="navbar-translate">
            <NavLink className="navbar-brand" to="/" onClick={() => this.openNav}>DE LA VIA</NavLink>
            <button onClick={this.openNav} className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className='outsideAlert'>
          <OutsideAlerter >
            <ul className="navbar-collapse" style={{right: this.state.right}}>
              <NavLink id="home" className="nav-item" to="/" onClick={this.openNav}>Home</NavLink>
              <NavLink className="nav-item" to="/resume" onClick={this.openNav}>Resume</NavLink>
              {/*<NavLink className="nav-item blog" to="/blog">Blog</NavLink>*/}
              <a className="nav-item blog" href="http://www.medium.com/@oliverdelavia" onClick={this.openNav} target="_blank" rel="noopener noreferrer">blog</a>
              <a className="nav-item last contact" href="mailto:odelavia@gmail.com" onClick={this.openNav}>Contact</a>
            </ul>
          </OutsideAlerter>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('this is redux state', state.navBar);
  return {
    navOpen:state.navBar.navOpen,
    display: state.navBar.display
  }
}

export default connect(mapStateToProps)(NavBar);
