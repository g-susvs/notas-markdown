import { Note } from '../../api';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	loadingNote,
	setError,
	setNote,
	nothingSelected,
	setUpdateNote,
	NoteUpdatePayload,
} from '../../store/note';

export const useNoteStore = () => {
	const dispatch = useAppDispatch();
	const { status, content, id, title, emoji } = useAppSelector(
		state => state.note,
	);

	const onSetNote = (note: Note) => {
		dispatch(setNote(note));
	};

	const onLoadingNote = () => {
		dispatch(loadingNote());
	};
	const onSetError = () => {
		dispatch(setError());
	};
	const onNothingSelected = () => {
		dispatch(nothingSelected());
	};

	const onSetUpdateNote = (note: NoteUpdatePayload) => {
		dispatch(setUpdateNote(note));
	};

	return {
		// props
		status,
		id,
		emoji,
		title,
		content,

		// methods
		onSetNote,
		onLoadingNote,
		onSetError,
		onNothingSelected,
		onSetUpdateNote,
	};
};
