import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthStore } from '../../../hooks/useAuthStore';

const ITEM_HEIGHT = 48;

export const Options = () => {
	const { startLogout } = useAuthStore();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				aria-label="more"
				id="long-button"
				aria-controls={open ? 'long-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: '20ch',
					},
				}}
			>
				<MenuItem
					onClick={startLogout}
					sx={{
						':hover': {
							backgroundColor: 'error.light',
						},
					}}
				>
					<Box sx={{ display: 'flex', gap: 1, color: 'error.main' }}>
						<LogoutIcon />
						<Typography fontWeight={800}>Cerrar sesión</Typography>
					</Box>
				</MenuItem>
			</Menu>
		</div>
	);
};
