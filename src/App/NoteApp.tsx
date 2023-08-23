import { Box } from '@mui/material';
import { Main, SideBar } from './components';

export function NoteApp() {
	return (
		<Box sx={{ display: 'flex' }}>
			<SideBar />
			<Main />
		</Box>
	);
}
