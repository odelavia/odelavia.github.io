import React, { Component } from 'react';
import Wizard from './Wizard';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.showResults = this.showResults.bind(this);
  }

  showResults() {
    window.alert(`You submitted your info!, ${values}`);
  };

  render() {
    return (
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <h2 className="title">Snail Mail</h2>
            <p className="description">Get in touch</p>
            <div className="form_wrapper">
              <Wizard onSubmit={this.showResults} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;