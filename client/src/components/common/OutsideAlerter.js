import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openNav, closeNav } from '../../actions/navBar';

class OutsideAlerter extends Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if ( event.target.parentNode.className == 'navbar-toggler'|| event.target.className == 'navbar-toggler') return
      if(this.props.display == 'block' && event.target.parentNode.className != 'navbar-toggler') {
            this.props.dispatch(closeNav());
            // console.log('entered props', this.props.navOpen)
      }
    }
  }

  render() {
    return <div ref={this.setWrapperRef} className='showWhenOfSize' style={{display: this.props.display}}>{this.props.children}</div>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state) => {
  return {
    navOpen:state.navBar.navOpen,
    display: state.navBar.display
  }
}

export default connect(mapStateToProps)(OutsideAlerter);