import { List } from '@mui/material';

import { NoteItem } from './NoteItem';
import { useNotes } from '../../hooks/useNotes';
import { SkeletonListItem } from './SkeletonListItem';
import { CreateNoteBtn } from './CreateNoteBtn';

export const NotesList = () => {
	const { notesQuery } = useNotes();

	return (
		<List
			sx={{ width: '100%', height: '100vh' }}
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			<CreateNoteBtn />
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
