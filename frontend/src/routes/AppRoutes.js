import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../features/auth/pages/SignIn/SignIn';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} /> {/* Default Route */}
		</Routes>
	);
}
  
export default AppRoutes;