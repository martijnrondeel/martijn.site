import React from 'react';

const Button = ({ buttonText }) => {
  return (
    <button type="button" className="button">
      {buttonText}
    </button>
  );
};

export default Button;
