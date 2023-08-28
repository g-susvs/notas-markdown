import { useQuery } from 'react-query';
import { ApiResponse, Note, NotesApi } from '../../api';

export const getNote = async (id: string): Promise<ApiResponse<Note>> => {
	const { data } = await NotesApi.get<ApiResponse<Note>>(`/notes/${id}`);
	return data;
};

export const useNote = (id: string) => {
	const noteQuery = useQuery(['note', id], () => getNote(id), {
		refetchOnWindowFocus: false,
		staleTime: 100000,
		retry: false,
	});

	return {
		noteQuery,
	};
};
