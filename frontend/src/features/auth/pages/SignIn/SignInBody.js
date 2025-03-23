import React, { useState } from 'react';
import styles from '../../styles/SignInBody.module.css';
import AuthToggleButton from '../../components/AuthToggleButton';
import { login } from '../../../../utils/api';
import { useAuth } from '../../../../contexts/AuthContext';

const SignInBody = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login: authLogin } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await login({ email, password });
      console.log('Login successful');
      // Call the login method from AuthContext with the token and user data
      // This will automatically redirect to the Restaurants page
      authLogin(response.token || 'dummy-token', { email });
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message || 'Login failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className={styles.signInBody}>
      <h2 className={styles.title}>Welcome back!</h2>
      {error && <p className={styles.error}>{error}</p>}
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
            required
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
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <AuthToggleButton type="submit" variant="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </AuthToggleButton>
        </div>
      </form>
    </div>
  );
};

export default SignInBody;