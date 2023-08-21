import axios from 'axios';
import { getEnvVariables } from '../config';

const { VITE_API_URL } = getEnvVariables();

export const NotesApi = axios.create({
	baseURL: VITE_API_URL,
});

NotesApi.interceptors.request.use(config => {
	config.headers['x-token'] = localStorage.getItem('x-token');

	return config;
});

export default NotesApi;
