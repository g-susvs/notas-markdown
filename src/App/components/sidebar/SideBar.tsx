import {
	Divider,
	Drawer,
	Grid,
	IconButton,
	Toolbar,
	Typography,
	Avatar,
	Box,
} from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { NotesList } from './NotesList';
import { useAuthStore, useUiStore } from '../../../hooks/';

export const SideBar = () => {
	const { drawerWidth, openDrawer, onCloseDrawer } = useUiStore();
	const { user } = useAuthStore();

	return (
		<Drawer
			sx={{
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: { xs: '100%', sm: drawerWidth },
					boxSizing: 'border-box',
				},
				display: {
					xs: openDrawer ? 'block' : 'none',
					sm: 'block',
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Toolbar>
				<Grid container justifyContent="space-between" alignItems="center">
					<Grid item>
						<div>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								{user.image ? (
									<Avatar
										alt="Remy Sharp"
										src="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
									/>
								) : (
									<Avatar sx={{ bgcolor: 'primary.main' }}>
										<AccountCircleIcon />
									</Avatar>
								)}

								<Typography noWrap>{user.name}</Typography>
							</Box>
						</div>
					</Grid>

					<Grid item>
						<IconButton
							onClick={onCloseDrawer}
							sx={{ display: { xs: 'block', sm: 'none', height: '40px' } }}
						>
							<ArrowBackIosIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
			<Divider />

			<NotesList />
		</Drawer>
	);
};
