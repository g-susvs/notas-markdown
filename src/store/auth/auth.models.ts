export type Status = 'checking' | 'authenticated' | 'not-authenticated';

export interface User {
	uid: string;
	email: string;
	name: string;
	image: string;
}

export interface AuthState {
	status: Status;
	errorMessage: string | undefined;
	user: User;
}
