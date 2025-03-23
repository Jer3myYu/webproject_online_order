import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  /*
   * This useEffect hook runs only once, right after the AuthProvider component mounts. 
   * It checks localStorage for an auth token and user data, which is useful 
   * for restoring a user's authentication state after a page refresh or new session. 
   * Even though the login function sets isAuthenticated when a user logs in, 
   * this effect ensures that if the token already exists (from a previous session), 
   * the state is correctly initialized. It does not run again after login updates the state.
   */
  useEffect(() => {
    // Check if user is already logged in from localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        setUser(userData);
      } catch (error) {
        console.error('Failed to parse user data', error);
      }
    }
    setLoading(false);
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
    navigate('/restaurants');
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 