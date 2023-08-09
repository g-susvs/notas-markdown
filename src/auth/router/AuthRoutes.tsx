import { Route, Routes } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};
