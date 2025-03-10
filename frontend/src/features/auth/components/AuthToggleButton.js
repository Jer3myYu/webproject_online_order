import React from 'react';
import styles from './AuthToggleButton.module.css';

const AuthToggleButton = ({ children, onClick, type = 'button', ...props }) => {
  return (
    <button className={styles.authToggleButton} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  );
};

export default AuthToggleButton;