import React from 'react';

const Four04 = ({ location }) => (
  <div className="fourohfour-wrapper">
    <div className="fourohfour-container">
      <h2>404</h2>
      <p>I'm sorry there's no match for <code>{location.pathname}</code></p>
      <p>Use the navigation to go back to your previous page.</p>
    </div>
  </div>
);

export default Four04;