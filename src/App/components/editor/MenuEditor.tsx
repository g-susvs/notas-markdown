import { Box, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUiStore } from '../../../hooks/useUiStore';
import { ModalDeleteNote } from './ModalDeleteNote';

export const MenuEditor = () => {
	const { openEditor, onToggleEditor, onToggleDeleteNoteModal, drawerWidth } =
		useUiStore();

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingTop: 1,
				paddingBottom: 1,
				backgroundColor: 'white',
				width: {
					xs: 'calc(100% - 50px)',
					sm: `calc(100% - ${drawerWidth}px - 50px)`,
				},
				position: 'fixed',
				top: { xs: '55px', sm: '64px' },
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Button
					variant="outlined"
					onClick={onToggleEditor}
					startIcon={!openEditor ? <EditIcon /> : <VisibilityIcon />}
					sx={{ width: '100px' }}
				>
					{!openEditor ? 'Editor' : 'Vista'}
				</Button>
			</Box>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Button
					onClick={onToggleDeleteNoteModal}
					variant="outlined"
					color="error"
					startIcon={<DeleteIcon />}
				>
					Eliminar
				</Button>
				<ModalDeleteNote />
			</Box>
		</Box>
	);
};
