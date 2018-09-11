import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from './validate';
import RenderField from './RenderField';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

let WizardFormSecondPage = ({ handleSubmit, previousPage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={RenderField} label="Email" />
      <div className="form-buttons">
        <button type="button" className="previous solid-button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next solid-button">Next</button>
      </div>
    </form>
  );
};

WizardFormSecondPage = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);

const selector = formValueSelector('wizard')
WizardFormSecondPage = connect(
  state => {
    const email = selector(state, 'email')
    return {
      email
    }
  }
)(WizardFormSecondPage)

export default WizardFormSecondPage;
