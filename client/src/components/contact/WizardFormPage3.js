import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const WizardFormThirdPage = ({ firstName, lastName, email, previousPage }) => {
  return (
    <form action="https://formspree.io/odelavia@gmail.com" method="POST" >
      <div className="renderField">
        <label>Message</label>
        <div className="input-container">
          <input name="firstName" type="hidden" style={{display: "none" }} readOnly value={firstName} />
          <input name="lastName" type="hidden" style={{display: "none" }} readOnly value={lastName} />
          <input name="_replyto" type="hidden" style={{display: "none" }} readOnly value={email} />
          <input type="text" name="_gotcha" style={{display: "none" }} />
          <input type="hidden" name="_format" value="plain" />
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
  const { fullName, firstName, lastName, email } = state.form.wizard.values
  console.log(state.form.wizard)
  return {
    fullName: fullName,
    firstName: firstName,
    lastName: lastName,
    email: email
  }
}

export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(connect(mapStateToProps)(WizardFormThirdPage));
