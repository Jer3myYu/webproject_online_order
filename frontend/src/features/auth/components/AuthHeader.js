import React from 'react';
import styles from './AuthHeader.module.css';
import AuthToggleButton from './AuthToggleButton';

const AuthHeader = () => {
  return (
    <header className={styles.authHeader}>
      <div className={styles.logo}> My App Logo</div>
      <div className={styles.authActions}>
        <AuthToggleButton onClick={() => console.log('Sign In clicked')}>
          Sign In
        </AuthToggleButton>
        <AuthToggleButton onClick={() => console.log('Sign Up clicked')}>
          Sign Up
        </AuthToggleButton>
      </div>
    </header>
  )
}

export default AuthHeader;