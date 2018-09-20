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
      <nav
        className={this.state.scrolledDown ? 'c-nav--color' : 'c-nav'}
        onScroll={this.onScrollColorChange}
      >
        <div className="l-nav-container">
          <div className="l-nav-translate">
            <NavLink className="nav__brand" to="/" onClick={() => this.openNav}>DE LA VIA</NavLink>
            <button className="js-nav-toggle" onClick={this.openNav} type="button" aria-label="Toggle navigation">
              <span className="nav-toggle__icon"></span>
              <span className="nav-toggle__icon"></span>
              <span className="nav-toggle__icon"></span>
            </button>
          </div>
          <div className='outsideAlert'>
          <OutsideAlerter >
            <ul className="l-nav-list" style={{right: this.state.right}}>
              <NavLink className="nav-list__item-1" to="/" onClick={this.openNav}>Home</NavLink>
              <a className="nav-list__item-2" href="https://drive.google.com/file/d/1NXOScHcc6ZgbCsTAKj2RJlbxvbN8BTYF/view" onClick={this.openNav} target="_blank" rel="noopener noreferrer">Resume</a>
              {/*<NavLink className="nav-list__item-3" to="/blog">Blog</NavLink>*/}
              <a className="nav-list__item-3" href="http://www.medium.com/@oliverdelavia" onClick={this.openNav} target="_blank" rel="noopener noreferrer">blog</a>
              <a className="nav-list__item-4" href="mailto:odelavia@gmail.com" onClick={this.openNav}>Contact</a>
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
