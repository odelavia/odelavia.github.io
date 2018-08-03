import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import RenderField from './RenderField';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="_replyto" type="email" component={RenderField} label="Email" />
      <div className="form-buttons">
        <button type="button" className="previous solid-button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next solid-button">Next</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  console.log('this is redux state', state.contactForm);
  return {
    email: state.contactForm.email
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})( connect(mapStateToProps)(WizardFormSecondPage));
