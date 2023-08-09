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

// import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NotesList } from './NotesList';

interface props {
	openDrawer: boolean;
	setOpenDrawer: (open: boolean) => void;
	drawerWidth: number;
}

export const SideBar = ({ openDrawer, drawerWidth, setOpenDrawer }: props) => {
	return (
		<Drawer
			sx={{
				width: { xs: '100%', sm: drawerWidth },
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
								<Avatar
									alt="Remy Sharp"
									src="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
								/>
								<Typography noWrap>Jesús Valencia</Typography>
							</Box>
						</div>
					</Grid>

					<Grid item>
						<IconButton
							onClick={() => setOpenDrawer(false)}
							sx={{ display: { xs: 'block', sm: 'none' } }}
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
