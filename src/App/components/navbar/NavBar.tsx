import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TitleNote } from './TitleNote';
import { Options } from './Options';

interface props {
	drawerWidth: number;
	setOpenDrawer: (open: boolean) => void;
}

export const NavBar = ({ drawerWidth, setOpenDrawer }: props) => {
	return (
		<AppBar
			position="fixed"
			sx={{
				color: 'black',
				backgroundColor: 'white',
				// boxShadow: '0px 1px 0px #e0e0e0',
				boxShadow: 'none',
				width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
			}}
		>
			<Toolbar>
				<IconButton
					onClick={() => setOpenDrawer(true)}
					sx={{ display: { xs: 'block', sm: 'none', color: 'secondary.main' } }}
				>
					<MenuIcon />
				</IconButton>
				<TitleNote />
				<Box sx={{ flexGrow: 1, display: 'flex' }}></Box>
				<Options />
			</Toolbar>
		</AppBar>
	);
};
