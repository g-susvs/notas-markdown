export interface ApiResponse {
	ok: boolean;
	status: number;
	body?: Body;
	message?: string;
}

export interface Body {
	uid: string;
	name: string;
	email: string;
	image: string;
	token: string;
}
