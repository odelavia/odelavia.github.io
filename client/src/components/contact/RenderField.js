import React from 'react';

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="renderField">
    <label>{label}</label>
    <div className="input-container">
      <input {...input} placeholder={label} type={type} />
      {
        touched && error &&
        <span className="error-message">{error}</span>
      }
    </div>
  </div>
);

export default RenderField;