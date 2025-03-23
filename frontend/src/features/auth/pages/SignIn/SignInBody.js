import React, { useState } from 'react';
import styles from '../../styles/SignInBody.module.css';
import AuthToggleButton from '../../components/AuthToggleButton';
import { login } from '../../../../utils/api';

const SignInBody = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login({ email, password });
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.signInBody}>
      <h2 className={styles.title}>Welcome back!</h2>
      <form className={styles.form} onSubmit={handleSignIn}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={`${styles.label} ${styles.text}`}>Email</label>
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
          <label htmlFor="password" className={`${styles.label} ${styles.text}`}>Password</label>
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
          <AuthToggleButton type="submit" variant="submit">Sign In</AuthToggleButton>
        </div>
      </form>
    </div>
  );
};

export default SignInBody;