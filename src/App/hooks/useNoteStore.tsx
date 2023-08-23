import { Note } from '../../api';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createNote, loadingNote, setNote } from '../../store/note/noteSlice';

export const useNoteStore = () => {
	const dispatch = useAppDispatch();
	const { status, content, id, title } = useAppSelector(state => state.note);

	const onSetNote = (note: Note) => {
		dispatch(setNote(note));
	};
	const onCreateNote = () => {
		dispatch(createNote());
	};
	const onLoadingNote = () => {
		dispatch(loadingNote());
	};

	return {
		// props
		status,
		id,
		title,
		content,

		// methods
		onSetNote,
		onCreateNote,
		onLoadingNote,
	};
};