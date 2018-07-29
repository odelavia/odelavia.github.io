import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import AsyncComponent from '../common/AsyncComponent';

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
      return <WizardFormFirstPage onSubmit={this.nextPage} />
    } else if (page === 2) {
      const AsyncWizardPage2 = AsyncComponent(()=> import('./WizardFormSecondPage'));
      return <AsyncWizardPage2 previousPage={this.previousPage} onSubmit={this.nextPage} />
    } else if (page === 3) {
      const AsyncWizardPage3 = AsyncComponent(()=> import('./WizardFormThirdPage'));
      return <AsyncWizardPage3 previousPage={this.previousPage} onSubmit={onSubmit} />
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
