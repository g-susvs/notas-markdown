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
import { useNavigate, useParams } from 'react-router-dom';
import { Note } from '../../../api';
import { useNoteStore } from '../../hooks';
import { useState, useEffect } from 'react';
import { useUiStore } from '../../../hooks';

interface props {
	note: Note;
}

export const NoteItem = ({ note }: props) => {
	// const [openListItem, setOpenListItem] = useState(false);
	const { id } = useParams();

	const { onCloseDrawer } = useUiStore();
	const { status, title, onLoadingNote } = useNoteStore();

	const [titlePrint, setTitlePrint] = useState(note.title);
	const navigate = useNavigate();

	const handleClickListItem = () => {
		// setOpenListItem(!openListItem);
		onCloseDrawer()
		if (id !== note.id) {
			onLoadingNote();
			navigate(`/home/${note.id}`);
		}
	};

	useEffect(() => {
		if (id === note.id && status === 'active') {
			setTitlePrint(title);
		}
	}, [id, note.id, status, title]);

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
						{titlePrint.length > 18
							? titlePrint.slice(0, 18) + '...'
							: titlePrint}
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
