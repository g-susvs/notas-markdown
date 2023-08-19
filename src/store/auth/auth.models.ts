export type Status = 'checking' | 'authenticated' | 'not-authenticated';

export interface User {
	uid: string;
	name: string;
}

export interface AuthState {
	status: Status;
	errorMessage: string | undefined;
	user: User;
}
