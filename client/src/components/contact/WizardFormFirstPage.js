import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import RenderField from './RenderField';

const WizardFormFirstPage = props => {
  const { handleSubmit, dispatch } = props;
  return (
    <form action="https://formspree.io/odelavia@gmail.com" method="POST" onSubmit={dispatch(sendFirstName(), sendLastName()), handleSubmit}>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (evt) => dispatch(sendFirstName(evt.target.querySelector('input').value)
//   }
// }

const mapStateToProps = (state) => {
  return {
    firstName: state.contactForm.firstName,
    lastName: state.contactForm.lastName
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(connect(mapStateToProps)(WizardFormFirstPage));
