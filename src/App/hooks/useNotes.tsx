import { useQuery } from 'react-query';
import { ApiResponse, Note, NotesApi } from '../../api';

export const getNotes = async (): Promise<ApiResponse<Note[]>> => {
	const { data } = await NotesApi.get<ApiResponse<Note[]>>('/notes');
	return data;
};

export const useNotes = () => {
	const notesQuery = useQuery(['notes'], getNotes, {
		refetchOnWindowFocus: false,
	});

	return {
		notesQuery,
	};
};
