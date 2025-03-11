import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../features/auth/pages/SignIn/SignIn';
import SignUp from '../features/auth/pages/SignUp/SignUp';
import RestaurantList from '../features/restaurant/components/RestaurantList';
const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} /> {/* Default Route */}
			<Route path="/signup" element={<SignUp />} />
			<Route path="/restaurants" element={<RestaurantList />} />
		</Routes>
	);
}
  
export default AppRoutes;