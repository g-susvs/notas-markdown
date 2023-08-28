import { Note } from '../../api';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	loadingNote,
	setError,
	setNote,
	nothingSelected,
	setUpdateNote,
} from '../../store/note/noteSlice';

export const useNoteStore = () => {
	const dispatch = useAppDispatch();
	const { status, content, id, title } = useAppSelector(state => state.note);

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

	const onSetUpdateNote = (note: { title?: string; content?: string }) => {
		dispatch(setUpdateNote(note));
	};

	return {
		// props
		status,
		id,
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
