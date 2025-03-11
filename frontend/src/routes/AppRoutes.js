import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../features/auth/pages/SignIn/SignIn';
import SignUp from '../features/auth/pages/SignUp/SignUp';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} /> {/* Default Route */}
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
}
  
export default AppRoutes;