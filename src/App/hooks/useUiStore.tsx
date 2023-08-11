import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	toggleOpenDrawer,
	toggleEditor,
	setOpenDrawer,
	setCloseDrawer,
} from '../../store/ui/uiSlice';

export const useUiStore = () => {
	const dispatch = useAppDispatch();
	const { openDrawer, openEditor } = useAppSelector(state => state.ui);

	const onOpenDrawer = () => dispatch(setOpenDrawer());

	const onCloseDrawer = () => dispatch(setCloseDrawer());

	const onToggleDrawer = () => dispatch(toggleOpenDrawer());

	const onToggleEditor = () => dispatch(toggleEditor());

	return {
		// props
		openDrawer,
		openEditor,

		// methods
		onOpenDrawer,
		onCloseDrawer,
		onToggleDrawer,
		onToggleEditor,
	};
};
