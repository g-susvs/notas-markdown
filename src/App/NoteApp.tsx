import { useState } from 'react';
import { Box } from '@mui/material';
import { Editor, NavBar, SideBar } from './components';

import './index.css';

const drawerWidth = 250;

export function NoteApp() {
	const [openDrawer, setOpenDrawer] = useState(true);

	return (
		<Box sx={{ display: 'flex' }}>
			<SideBar
				openDrawer={openDrawer}
				setOpenDrawer={setOpenDrawer}
				drawerWidth={drawerWidth}
			/>
			<Box sx={{ width: '100%' }}>
				<NavBar drawerWidth={drawerWidth} setOpenDrawer={setOpenDrawer} />
				<Editor />
			</Box>
		</Box>
	);
}
