import React from 'react';
import './Button.css';

const Button = ({ className = '', onClick, children }) =>
  <button
    className={className}
    type="button"
    onClick={onClick} >
    {children}
  </button>

export default Button;
