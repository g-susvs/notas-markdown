// import { useState } from 'react';
import {
	ListItemButton,
	// ListItemIcon,
	// ListItemText,
	// Collapse,
	// List,
	Box,
	Typography,
} from '@mui/material';
// import { ExpandMore, StarBorder } from '@mui/icons-material';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { Note } from '../../../api';
import { useNoteStore } from '../../hooks';

interface props {
	note: Note;
}

export const NoteItem = ({ note }: props) => {
	// const [openListItem, setOpenListItem] = useState(false);
	const { id } = useNoteStore();
	const navigate = useNavigate();

	const handleClickListItem = () => {
		// setOpenListItem(!openListItem);
		// navigate(`?note=${note.id}`);
		navigate(`/home/${note.id}`);
	};
	return (
		<>
			<ListItemButton
				onClick={handleClickListItem}
				sx={{
					backgroundColor: note.id === id ? 'primary.light' : '',
					':hover': {
						backgroundColor: 'primary.light',
					},
				}}
			>
				{/* {openListItem ? <ExpandMore /> : <KeyboardArrowRightIcon />} */}
				<Box sx={{ display: 'flex', gap: 1, marginLeft: 1 }}>
					<Typography>📄</Typography>
					<Typography>
						{note.title.length > 18
							? note.title.slice(0, 18) + '...'
							: note.title}
					</Typography>
				</Box>
			</ListItemButton>

			{/* <Collapse in={openListItem} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</ListItemButton>
				</List>
			</Collapse> */}
		</>
	);
};
