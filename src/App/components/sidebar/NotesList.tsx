import { Box, List, ListItemButton, Typography } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { NoteItem } from './NoteItem';
import { useNotes } from '../../hooks/useNotes';
import { SkeletonListItem } from './SkeletonListItem';

export const NotesList = () => {
	const { notesQuery } = useNotes();

	const onCreateNote = () => {
		console.log('Crear nota');
	};

	return (
		<List
			sx={{ width: '100%', height: '100vh' }}
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			<ListItemButton
				onClick={onCreateNote}
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
			{notesQuery.isLoading ? (
				<SkeletonListItem />
			) : (
				notesQuery.data?.body?.map(note => {
					return <NoteItem key={note.id} note={note} />;
				})
			)}
		</List>
	);
};
