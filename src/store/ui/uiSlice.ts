import { createSlice } from '@reduxjs/toolkit';

export interface UiState {
	drawerWidth: number;
	openDrawer: boolean;
	openEditor: boolean;
	isTitleEdit: boolean;
}

const initialState: UiState = {
	drawerWidth: 250,
	openDrawer: true,
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
		toggleOpenDrawer: state => {
			state.openDrawer = !state.openDrawer;
		},
		toggleEditor: state => {
			state.openEditor = !state.openEditor;
		},
	},
});

export const { setOpenDrawer, setCloseDrawer, toggleOpenDrawer, toggleEditor } =
	uiSlice.actions;
