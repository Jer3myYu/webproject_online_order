import React from 'react';
import styles from '../styles/AuthToggleButton.module.css';
import classNames from 'classnames';

const AuthToggleButton = ({ children, onClick, type = 'button', variant, ...props }) => {
  // buttonClass combines the base button style with variant-specific styles using the classNames library.
  const buttonClass = classNames(styles.authToggleButton, {
    [styles.authToggleButtonSubmit]: variant === 'submit',
    [styles.authToggleButtonSecondary]: variant === 'secondary',
  });

  // 'type' is the HTML attribute for the button (e.g., "button", "submit", "reset").
  // 'onClick' is the event handler passed as a prop for when the button is clicked.
  // 'children' contains the content nested inside the button element.
  // Any additional props are spread onto the button element via {...props}.
  return (
    <button className={buttonClass} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  );
};

export default AuthToggleButton;