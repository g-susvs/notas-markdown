import { useState } from 'react';
import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	List,
	Box,
	Typography,
} from '@mui/material';
import { ExpandMore, StarBorder } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

interface props {
	iconItem: string;
	title: string;
}

export const NoteItem = ({ iconItem, title }: props) => {
	const [openListItem, setOpenListItem] = useState(false);

	const navigate = useNavigate();

	const handleClickListItem = () => {
		setOpenListItem(!openListItem);
		navigate(`?note=${title}`);
	};
	return (
		<>
			<ListItemButton
				onClick={handleClickListItem}
				sx={{
					':hover': {
						backgroundColor: 'primary.light',
					},
				}}
			>
				{openListItem ? <ExpandMore /> : <KeyboardArrowRightIcon />}
				<Box sx={{ display: 'flex', gap: 1, marginLeft: 1 }}>
					<Typography>{iconItem}</Typography>
					<Typography>{title}</Typography>
				</Box>
			</ListItemButton>

			<Collapse in={openListItem} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</ListItemButton>
				</List>
			</Collapse>
		</>
	);
};
