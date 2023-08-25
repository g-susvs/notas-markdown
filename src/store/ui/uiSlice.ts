import { createSlice } from '@reduxjs/toolkit';

export interface UiState {
	drawerWidth: number;
	openDrawer: boolean;
	openCreateNoteModal: boolean;
	openEditor: boolean;
	openDeleteNoteModal: boolean;
	isTitleEdit: boolean;
}

const initialState: UiState = {
	drawerWidth: 250,
	openDrawer: true,
	openCreateNoteModal: false,
	openDeleteNoteModal: false,
	openEditor: true,
	isTitleEdit: false,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setOpenDrawer: state => {
			state.openDrawer = true;
		},
		setCloseDrawer: state => {
			state.openDrawer = false;
		},
		toggleOpenCreateNoteModal: state => {
			state.openCreateNoteModal = !state.openCreateNoteModal;
		},
		toogleDeleteNoteModal: state => {
			state.openDeleteNoteModal = !state.openDeleteNoteModal;
		},
		toggleOpenDrawer: state => {
			state.openDrawer = !state.openDrawer;
		},
		toggleEditor: state => {
			state.openEditor = !state.openEditor;
		},
	},
});

export const {
	setOpenDrawer,
	setCloseDrawer,
	toggleOpenDrawer,
	toggleEditor,
	toggleOpenCreateNoteModal,
	toogleDeleteNoteModal,
} = uiSlice.actions;
