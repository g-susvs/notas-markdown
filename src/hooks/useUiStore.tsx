import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
	toggleOpenDrawer,
	toggleEditor,
	setOpenDrawer,
	setCloseDrawer,
	toggleOpenCreateNoteModal,
} from '../store/ui/uiSlice';

export const useUiStore = () => {
	const dispatch = useAppDispatch();
	const { drawerWidth, openDrawer, openEditor, openCreateNoteModal } =
		useAppSelector(state => state.ui);

	const onOpenDrawer = () => dispatch(setOpenDrawer());

	const onCloseDrawer = () => dispatch(setCloseDrawer());

	const onToggleDrawer = () => dispatch(toggleOpenDrawer());

	const onToggleOpenCreateNoteModal = () =>
		dispatch(toggleOpenCreateNoteModal());

	const onToggleEditor = () => dispatch(toggleEditor());

	return {
		// props
		drawerWidth,
		openDrawer,
		openEditor,
		openCreateNoteModal,

		// methods
		onOpenDrawer,
		onCloseDrawer,
		onToggleDrawer,
		onToggleEditor,
		onToggleOpenCreateNoteModal,
	};
};
