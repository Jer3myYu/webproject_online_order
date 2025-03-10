import React, { useState } from 'react';
import styles from './SignInBody.module.css';
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
    <div className={styles.signInBody}>
      <h2 className={styles.title}>Welcome back!</h2>
      <form className={styles.form} onSubmit={handleSignIn}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.buttonContainer}>
          <AuthToggleButton type="submit">Sign In</AuthToggleButton>
        </div>
      </form>
    </div>
  );
};

export default SignInBody;