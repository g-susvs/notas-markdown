import { Box, List, ListItemButton, Typography } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { NoteItem } from './NoteItem';

export const NotesList = () => {
	return (
		<List
			sx={{ width: '100%', height: '100vh' }}
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			<ListItemButton
				sx={{
					':hover': {
						backgroundColor: 'primary.light',
					},
				}}
			>
				<Box sx={{ display: 'flex', gap: 1 }}>
					<AddCircleIcon />
					<Typography>Crear Nota</Typography>
				</Box>
			</ListItemButton>

			<NoteItem iconItem={'🏠'} title={'Home'} />
			<NoteItem iconItem={'🏫'} title={'Platzi'} />
			<NoteItem iconItem={'🚩'} title={'Ingles'} />
			<NoteItem iconItem={'🔩'} title={'Ejercicio'} />
		</List>
	);
};
