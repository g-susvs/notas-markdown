import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
	toggleOpenDrawer,
	toggleEditor,
	setOpenDrawer,
	setCloseDrawer,
	toggleOpenCreateNoteModal,
	toogleDeleteNoteModal,
} from '../store/ui/uiSlice';

export const useUiStore = () => {
	const dispatch = useAppDispatch();
	const {
		drawerWidth,
		openDrawer,
		openEditor,
		openCreateNoteModal,
		openDeleteNoteModal,
	} = useAppSelector(state => state.ui);

	const onOpenDrawer = () => dispatch(setOpenDrawer());

	const onCloseDrawer = () => dispatch(setCloseDrawer());

	const onToggleDrawer = () => dispatch(toggleOpenDrawer());

	const onToggleOpenCreateNoteModal = () =>
		dispatch(toggleOpenCreateNoteModal());

	const onToggleDeleteNoteModal = () => dispatch(toogleDeleteNoteModal());

	const onToggleEditor = () => dispatch(toggleEditor());

	return {
		// props
		drawerWidth,
		openDrawer,
		openEditor,
		openCreateNoteModal,
		openDeleteNoteModal,

		// methods
		onOpenDrawer,
		onCloseDrawer,
		onToggleDrawer,
		onToggleEditor,
		onToggleOpenCreateNoteModal,
		onToggleDeleteNoteModal,
	};
};
