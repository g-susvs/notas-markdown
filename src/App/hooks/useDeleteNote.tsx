import { useMutation, useQueryClient } from 'react-query';
import { ApiResponse, Note, NotesApi } from '../../api';
import { getNotes } from '.';

const deleteNoteFromDb = async (id: string): Promise<ApiResponse<Note>> => {
	const { data } = await NotesApi.delete<ApiResponse<Note>>(`/notes/${id}`);
	return data;
};

export const useDeleteNote = () => {
	const queryClient = useQueryClient();

	const deleteNote = useMutation(deleteNoteFromDb, {
		onMutate: undefined,
		onSuccess: () => {
			queryClient.prefetchQuery(['notes'], getNotes);
		},
	});

	return {
		deleteNote,
	};
};
