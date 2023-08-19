import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NoteApp } from '../App/NoteApp';
import { App } from '../landing/App';
import { AuthRoutes } from '../auth/router/AuthRoutes';
import { useAuthStore } from '../hooks/useAuthStore';
import { Checking } from './Checking';

export const AppRouter = () => {
	const { status, checkAuthToken } = useAuthStore();

	useEffect(() => {
		checkAuthToken();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (status === 'checking') {
		return <Checking />;
	}

	return (
		<Routes>
			{status === 'not-authenticated' ? (
				<>
					<Route path="/" element={<App />} />
					<Route path="/auth/*" element={<AuthRoutes />} />
					<Route path="/*" element={<Navigate to="/" />} />
				</>
			) : (
				<>
					<Route path="/*" element={<Navigate to="/home" />} />
					<Route path="/home/*" element={<NoteApp />} />
				</>
			)}
		</Routes>
	);
};
