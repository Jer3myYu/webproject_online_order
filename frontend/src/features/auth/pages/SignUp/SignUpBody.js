import React, { useState } from 'react';
import styles from './SignUpBody.module.css';
import AuthToggleButton from '../../components/AuthToggleButton';

const SignUpBody = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // State for error messages
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear any previous errors
    setError('');

    // Add your sign up logic here
    console.log('Sign Up with:', { email, password, confirmPassword, firstName, lastName });
  };

  return (
    <div className={styles.signInBody}>
      <h2 className={styles.title}>Welcome!</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSignUp}>
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
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={`${styles.label} ${styles.text}`}>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className={styles.input}
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />    
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={`${styles.label} ${styles.text}`}>First Name</label>
          <input
            type="text"
            id="firstName"
            className={styles.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={`${styles.label} ${styles.text}`}>Last Name</label>
          <input
            type="text"
            id="lastName"
            className={styles.input}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <AuthToggleButton type="submit" variant="submit">Sign Up</AuthToggleButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpBody;