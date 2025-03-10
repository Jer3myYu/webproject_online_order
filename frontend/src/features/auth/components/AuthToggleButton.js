import React from 'react';
import styles from './AuthToggleButton.module.css';
import classNames from 'classnames';

const AuthToggleButton = ({ children, onClick, type = 'button', variant, ...props }) => {
  const buttonClass = classNames(styles.authToggleButton, {
    [styles.authToggleButtonSubmit]: variant === 'submit',
    [styles.authToggleButtonSecondary]: variant === 'secondary',
  });

  return (
    <button className={buttonClass} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  );
};

export default AuthToggleButton;