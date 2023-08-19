import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, User } from './auth.models';

const initialState: AuthState = {
	status: 'checking',
	errorMessage: undefined,
	user: {} as User,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		checkingAuth: state => {
			state.status = 'checking';
			state.user = {} as User;
			state.errorMessage = undefined;
		},
		onLogin: (state, { payload }: PayloadAction<User>) => {
			state.status = 'authenticated';
			state.user = payload;
			state.errorMessage = undefined;
		},
		onLogout: (state, { payload }: PayloadAction<string>) => {
			state.status = 'not-authenticated';
			state.user = {} as User;
			state.errorMessage = payload;
		},
	},
});

export const { checkingAuth, onLogin, onLogout } = authSlice.actions;
