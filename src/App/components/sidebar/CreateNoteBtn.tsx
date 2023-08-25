import { Box, ListItemButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ModalCreateNote } from './ModalCreateNote';
import { useUiStore } from '../../../hooks';

export const CreateNoteBtn = () => {
	const { onToggleOpenCreateNoteModal } = useUiStore();

	return (
		<>
			<ListItemButton
				onClick={onToggleOpenCreateNoteModal}
				sx={{
					':hover': {
						backgroundColor: 'primary.light',
					},
				}}
			>
				<Box sx={{ display: 'flex', gap: 1 }}>
					<AddCircleIcon sx={{ color: 'primary.main' }} />
					<Typography>Crear Nota</Typography>
				</Box>
			</ListItemButton>
			<ModalCreateNote />
		</>
	);
};
