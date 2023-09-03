import { useMutation, useQueryClient } from 'react-query';
import { ApiResponse, Note, NotesApi } from '../../api';
import { getNote, getNotes } from '.';
import { NoteUpdatePayload } from '../../store/note';

interface Props {
	id: Note['id'];
	note: NoteUpdatePayload;
}

const updateNoteFromDb = async (args: Props) => {
	const { data } = await NotesApi.put<ApiResponse<Note>>(
		`/notes/${args.id}`,
		args.note,
	);
	return data;
};

export const useUpdateNote = (id: string) => {
	const queryClient = useQueryClient();

	const updateNote = useMutation(updateNoteFromDb, {
		onMutate: undefined,
		onSuccess: () => {
			queryClient.prefetchQuery(['notes'], getNotes);
			queryClient.prefetchQuery(['note', id], () => getNote(id));
		},
	});

	return {
		updateNote,
	};
};
