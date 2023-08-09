import { Route, Routes } from 'react-router-dom';
import { NoteApp } from '../App/NoteApp';
import { App } from '../landing/App';
import { AuthRoutes } from '../auth/router/AuthRoutes';
import { NotFound } from './NotFound';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/home/*" element={<NoteApp />} />
			<Route path="/auth/*" element={<AuthRoutes />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};
