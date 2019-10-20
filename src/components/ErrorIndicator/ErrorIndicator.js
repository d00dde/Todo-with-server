import React from 'react';
import './ErrorIndicator.css';

export default (props) => {
  return (
    <div className="error-indicator">
      {props.texts.errorIndicator.message}
    </div>
  )

};

