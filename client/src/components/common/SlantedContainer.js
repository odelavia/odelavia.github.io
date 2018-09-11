import React from 'react';

const SlantedContainer = (props) => {
  return (
    <div className="slantedDiv">
      {props.children}
    </div>
  );
}

export default SlantedContainer;