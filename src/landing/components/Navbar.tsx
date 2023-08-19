import { Link as RouterLink } from 'react-router-dom';

import {
	Button,
	Container,
	Typography,
	Toolbar,
	Box,
	AppBar,
	Link,
} from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';

export const NavBar = () => {
	return (
		<AppBar
			sx={{ boxShadow: 'none', backgroundColor: 'white', color: 'black' }}
		>
			<Container maxWidth="lg">
				<Toolbar
					disableGutters
					sx={{
						display: 'flex',
					}}
				>
					<Link
						component={RouterLink}
						to="/"
						sx={{
							display: 'flex',
							alignItems: 'center',
							textDecoration: 'none',
						}}
					>
						<EditNoteIcon sx={{ display: 'flex', mr: 1 }} />
						<Typography
							// variant="h4"
							noWrap
							component="a"
							// href="/"
							sx={{
								mr: 2,
								fontFamily: 'monospace',
								fontWeight: 800,
								fontSize: '1.6rem',
								letterSpacing: '.1rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							NOTAS-MARKDOWN
						</Typography>
					</Link>

					<Box sx={{ flexGrow: 1, display: 'flex' }}></Box>
					<Box>
						<RouterLink to="/auth/register">
							<Button variant="outlined">Registrate</Button>
						</RouterLink>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
