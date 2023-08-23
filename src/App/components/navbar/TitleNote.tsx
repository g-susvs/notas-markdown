import { useState } from 'react';
import { Box, Button, Menu, TextField } from '@mui/material';
import { useNoteStore } from '../../hooks';

export const TitleNote = () => {
	const { title } = useNoteStore();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				startIcon={'📄'}
				sx={{
					color: 'black',
					textTransform: 'capitalize',
					':hover': {
						backgroundColor: 'primary.light',
					},
				}}
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{title}
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
					<TextField
						variant="outlined"
						size="small"
						value={'Platzi'}
						fullWidth
					/>
				</Box>
			</Menu>
		</>
	);
};
