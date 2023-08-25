import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Note } from '../../api';

export interface NoteState extends Pick<Note, 'id' | 'title' | 'content'> {
	status: 'nothing-selected' | 'loading' | 'active' | 'error';
}

export const noteSlice = createSlice({
	name: 'note',
	initialState: {
		status: 'nothing-selected',
		id: '',
		title: '',
		content: '',
	} as NoteState,
	reducers: {
		setError: state => {
			state.status = 'error';
			state.id = '';
			state.title = '';
			state.content = '';
		},
		setNote: (state, { payload }: PayloadAction<Note>) => {
			state.status = 'active';
			state.id = payload.id;
			state.title = payload.title;
			state.content = payload.content;
		},
		loadingNote: state => {
			state.status = 'loading';
			state.id = '';
			state.title = '';
			state.content = '';
		},
	},
});

export const { setNote, loadingNote, setError } = noteSlice.actions;
