import { useAppDispatch, useAppSelector } from '../store/hooks';
import { onLogin, checkingAuth, onLogout, User } from '../store/auth/';

export const useAuthStore = () => {
	const dispatch = useAppDispatch();

	const { status, user, errorMessage } = useAppSelector(state => state.auth);

	const checkAuthToken = async () => {
		dispatch(checkingAuth());
		const token = localStorage.getItem('token');
		if (token) {
			//TODO verify token
		} else {
			dispatch(onLogout(''));
		}
	};
	const startLogin = async (data: User) => {
		dispatch(checkingAuth());
		//TODO petición api

		dispatch(onLogin(data));
	};
	const startLogout = async () => {
		dispatch(checkingAuth());

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
		startLogout,
	};
};
