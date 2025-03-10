import React from 'react';
import './AuthHeader.css';
import AuthToggleButton from './AuthToggleButton';

const AuthHeader = () => {
  return (
    <header className="auth-header">
      <div className="auth-header__logo"> My App Logo</div>
      <div className="auth-header__actions">
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