import { Box } from '@mui/material';
import { Editor, NavBar, SideBar } from './components';

const drawerWidth = 250;

export function NoteApp() {
	return (
		<Box sx={{ display: 'flex' }}>
			<SideBar drawerWidth={drawerWidth} />
			<Box sx={{ width: '100%' }}>
				<NavBar drawerWidth={drawerWidth} />
				<Editor />
			</Box>
		</Box>
	);
}
