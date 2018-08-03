import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const WizardFormThirdPage = props => {
  const { handleSubmit, previousPage, submitting } = props;
  return (
    <form action="https://formspree.io/odelavia@gmail.com" method="POST" >
      <div className="renderField">
        <label>Message</label>
        <div className="input-container">
          <Field name="message" component="textarea" placeholder="Message..." />
        </div>
      </div>
      <div className="form-buttons">
        <button type="button" className="previous solid-button" onClick={previousPage}>
          Previous
        </button>
        <input type="submit" value="Send" className="submit solid-button" />

      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  console.log('this is redux state', state.contactForm);
  return {
    firstName: state.contactForm.firstName,
    lastName: state.contactForm.lastName,
    email: state.contactForm.email
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(connect(mapStateToProps)(WizardFormThirdPage));
