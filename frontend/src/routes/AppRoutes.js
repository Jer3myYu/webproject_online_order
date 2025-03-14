import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../features/auth/pages/SignIn/SignIn';
import SignUp from '../features/auth/pages/SignUp/SignUp';
import Restaurants from '../features/restaurant/pages/Restaurants/Restaurants';
import MenuItems from '../features/restaurant/pages/MenuItems/MenuItems';
import Checkout from '../features/checkout/pages/Checkout';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} /> {/* Default Route */}
			<Route path="/signup" element={<SignUp />} />
			<Route path="/restaurants" element={<Restaurants />} />
        	<Route path="/menu-items" element={<MenuItems />} />
			<Route path="/checkout" element = {<Checkout />} />
		</Routes>
	);
}
  
export default AppRoutes;