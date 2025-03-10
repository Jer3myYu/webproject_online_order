import React from 'react';
import './AuthToggleButton.css';

const AuthToggleButton = ({ children, onClick, type = 'button', ...props }) => {
  return (
    <button className="auth-toggle-button" onClick={onClick} type={type} {...props}>
      {children}
    </button>
  );
};

export default AuthToggleButton;