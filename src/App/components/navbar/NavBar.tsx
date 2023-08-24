import { AppBar, Box, IconButton, Toolbar, Skeleton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TitleNote } from './TitleNote';
import { Options } from './Options';
import { useUiStore } from '../../../hooks/useUiStore';
import { useNoteStore } from '../../hooks';

export const NavBar = () => {
	const { status } = useNoteStore();
	const { drawerWidth, onOpenDrawer } = useUiStore();

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
					onClick={onOpenDrawer}
					sx={{
						display: {
							xs: 'block',
							sm: 'none',
							color: 'secondary.main',
							height: '40px',
						},
					}}
				>
					<MenuIcon />
				</IconButton>

				{status === 'active' && <TitleNote />}
				{status === 'loading' && (
					<Skeleton
						animation="wave"
						variant="rounded"
						width={200}
						height={20}
					/>
				)}
				{status === 'nothing-selected' && null}
				{status === 'error' && null}
				<Box sx={{ flexGrow: 1, display: 'flex' }}></Box>
				<Options />
			</Toolbar>
		</AppBar>
	);
};
