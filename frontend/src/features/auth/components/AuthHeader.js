import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthHeader.module.css';
import AuthToggleButton from './AuthToggleButton';

const AuthHeader = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.authHeader}>
      <div className={styles.logo}> My App Logo</div>
      <div className={styles.authActions}>
        <AuthToggleButton onClick={() => navigate('/')}>
          Sign In
        </AuthToggleButton>
        <AuthToggleButton onClick={() => navigate('/signup')}>
          Sign Up
        </AuthToggleButton>
      </div>
    </header>
  )
}

export default AuthHeader;