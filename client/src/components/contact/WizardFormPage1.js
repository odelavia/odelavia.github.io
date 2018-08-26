import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import RenderField from './RenderField';

let WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form action="https://formspree.io/odelavia@gmail.com" method="POST" onSubmit={ handleSubmit }>
      <Field
        name="firstName"
        type="text"
        component={RenderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={RenderField}
        label="Last Name"
      />
      <div className="form-buttons">
        <button type="submit" className="next solid-button">Next</button>
      </div>
    </form>
  );
};

WizardFormFirstPage = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);

const selector = formValueSelector('wizard')
WizardFormFirstPage = connect(
  state => {
    const { firstName, lastName } = selector(state, 'firstName', 'lastName')
    return {
      fullName: `${firstName || ''} ${lastName || ''}`
    }
  }
)(WizardFormFirstPage)

export default WizardFormFirstPage;
