import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  renderPage() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    if (page === 1) {
      return ( <WizardFormFirstPage onSubmit={this.nextPage} /> );
    } else if (page === 2) {
      return ( <WizardFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
              /> );
    } else if (page === 3) {
      return (<WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
              />);
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Wizard;
