import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../features/auth/pages/SignIn/SignIn';
import SignUp from '../features/auth/pages/SignUp/SignUp';
import Restaurants from '../features/restaurant/pages/Restaurants/Restaurants';
import MenuItems from '../features/restaurant/pages/MenuItems/MenuItems';
import Checkout from '../features/checkout/pages/Checkout';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';

const AppRoutes = () => {
	const { isAuthenticated } = useAuth();

	return (
		<Routes>
			{/* If already authenticated, redirect to restaurants page */}
			<Route path="/" element={
				isAuthenticated ? <Navigate to="/restaurants" /> : <SignIn />
			} />
			<Route path="/signup" element={<SignUp />} />
			
			{/* Protected Routes */}
			<Route path="/restaurants" element={
				<ProtectedRoute>
					<Restaurants />
				</ProtectedRoute>
			} />
        	<Route path="/menu-items" element={
				<ProtectedRoute>
					<MenuItems />
				</ProtectedRoute>
			} />
			<Route path="/checkout" element={
				<ProtectedRoute>
					<Checkout />
				</ProtectedRoute>
			} />
		</Routes>
	);
}
  
export default AppRoutes;