import { useMutation, useQueryClient } from 'react-query';
import { ApiResponse, Note, NotesApi } from '../../api';
import { getNotes } from '.';

const createNote = async (note: { title: string; content: string }) => {
	const { data } = await NotesApi.post<ApiResponse<Note>>('/notes', note);
	return data;
};

export const useCreateNote = () => {
	const queryClient = useQueryClient();

	const noteCreated = useMutation(createNote, {
		onSuccess: () => {
			queryClient.prefetchQuery(['notes'], getNotes);
		},
	});

	return {
		noteCreated,
	};
};