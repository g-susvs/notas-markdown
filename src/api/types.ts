export interface ApiResponse<T> {
	ok: boolean;
	status: number;
	body?: T;
	message?: string;
}

export interface UserData {
	uid: string;
	name: string;
	email: string;
	image: string;
	token: string;
}

export interface Note {
	_id: string;
	id: string;
	title: string;
	content: string;
	user_id: string;
	__v: number;
}
