import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Note } from '../../api';

export interface NoteState extends Omit<Note, 'user_id'> {
	status: 'nothing-selected' | 'loading' | 'active' | 'error';
}

export type NoteUpdatePayload = Partial<
	Pick<Note, 'title' | 'content' | 'emoji'>
>;

const initialState: NoteState = {
	status: 'nothing-selected',
	id: '',
	emoji: '',
	title: '',
	content: '',
};
export const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		setError: state => {
			state.status = 'error';
			state.id = '';
			state.title = '';
			state.content = '';
			state.emoji = '';
		},
		setNote: (state, { payload }: PayloadAction<Note>) => {
			state.status = 'active';
			state.id = payload.id;
			state.title = payload.title;
			state.content = payload.content;
			state.emoji = payload.emoji;
		},
		loadingNote: state => {
			state.status = 'loading';
			state.id = '';
			state.title = '';
			state.content = '';
			state.emoji = '';
		},
		nothingSelected: state => {
			state.status = 'nothing-selected';
			state.id = '';
			state.title = '';
			state.content = '';
			state.emoji = '';
		},
		setUpdateNote: (state, { payload }: PayloadAction<NoteUpdatePayload>) => {
			state.title = payload.title || state.title;
			state.content = payload.content || state.content;
			state.emoji = payload.emoji || state.emoji;
		},
	},
});

export const {
	setNote,
	loadingNote,
	setError,
	nothingSelected,
	setUpdateNote,
} = noteSlice.actions;
