import { createSlice } from '@reduxjs/toolkit';

export interface UiState {
	drawerWidth: number;
	openDrawer: boolean;
	openCreateNoteModal: boolean;
	openEditor: boolean;
	isTitleEdit: boolean;
}

const initialState: UiState = {
	drawerWidth: 250,
	openDrawer: true,
	openCreateNoteModal: false,
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
} = uiSlice.actions;
