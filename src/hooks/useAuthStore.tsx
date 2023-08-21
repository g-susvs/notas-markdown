import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
	onLogin,
	checkingAuth,
	onLogout,
	clearErrorMessage,
} from '../store/auth/';
import NotesApi from '../api/NotesApi';
import { ApiResponse } from '../api/types';

export const useAuthStore = () => {
	const dispatch = useAppDispatch();

	const { status, user, errorMessage } = useAppSelector(state => state.auth);

	const checkAuthToken = async () => {
		dispatch(checkingAuth());
		const token = localStorage.getItem('x-token');
		if (!token) return dispatch(onLogout(''));
		try {
			const { data } = await NotesApi.get<ApiResponse>('/auth/renew');

			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const { token, uid, name, email, image } = data.body!;

			localStorage.setItem('x-token', token);

			dispatch(onLogin({ uid, name, email, image }));
		} catch (error) {
			localStorage.clear();
			dispatch(onLogout(''));
		}
	};
	const startLogin = async (credentials: {
		email: string;
		password: string;
	}) => {
		dispatch(checkingAuth());

		try {
			const { data } = await NotesApi.post<ApiResponse>(
				'/auth/login',
				credentials,
			);

			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const { uid, email, name, image, token } = data.body!;
			localStorage.setItem('x-token', token);

			dispatch(onLogin({ uid, email, name, image }));
		} catch (error) {
			console.log(error);
			dispatch(onLogout('Error de credenciales'));
			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 1000);
		}
	};

	const startRegister = async (userData: {
		name: string;
		email: string;
		password: string;
	}) => {
		dispatch(checkingAuth());

		try {
			const { data } = await NotesApi.post<ApiResponse>('/auth/new', userData);

			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const { uid, email, name, image, token } = data.body!;
			localStorage.setItem('x-token', token);

			dispatch(onLogin({ uid, email, name, image }));
		} catch (error) {
			console.log(error);
			dispatch(onLogout('Error al enviar los datos'));
			setTimeout(() => {
				dispatch(clearErrorMessage());
			}, 3000);
		}
	};

	const startLogout = async () => {
		dispatch(checkingAuth());
		localStorage.clear();
		dispatch(onLogout(''));
	};

	return {
		// props
		status,
		user,
		errorMessage,

		// methods
		checkAuthToken,
		startLogin,
		startRegister,
		startLogout,
	};
};
