import React, { useState } from 'react';
import './SignInBody.css';
import AuthToggleButton from '../../components/AuthToggleButton';

const SignInBody = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign in logic here
    console.log('Sign in with:', { email, password });
  };

  return (
    <div className="signin-body">
      <h2 className="signin-body__title roboto-login-title">Welcome back!</h2>
      <form className="signin-body__form" onSubmit={handleSignIn}>
        <div className="signin-body__form-group">
          <label htmlFor="email" className="signin-body__label">Email</label>
          <input
            type="email"
            id="email"
            className="signin-body__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="signin-body__form-group">
          <label htmlFor="password" className="signin-body__label">Password</label>
          <input
            type="password"
            id="password"
            className="signin-body__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="signin-body__button auth-toggle-button--submit">
          <AuthToggleButton type="submit">Sign In</AuthToggleButton>
        </div>
      </form>
    </div>
  );
};

export default SignInBody;