import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

interface props {
	viewText: boolean;
	setviewText: (b: boolean) => void;
}

export const MenuEditor = ({ viewText, setviewText }: props) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingBottom: 2,
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Button
					variant="outlined"
					onClick={() => setviewText(!viewText)}
					startIcon={viewText ? <EditIcon /> : <VisibilityIcon />}
					sx={{ width: '100px' }}
				>
					{viewText ? 'Editor' : 'Vista'}
				</Button>
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="inherit" href="/">
						MUI
					</Link>
					<Link
						underline="hover"
						color="inherit"
						href="/material-ui/getting-started/installation/"
					>
						Core
					</Link>
					<Typography color="text.primary">Breadcrumbs</Typography>
				</Breadcrumbs>
			</Box>
			<Button variant="contained" startIcon={<SaveIcon />}>
				Guardar
			</Button>
		</Box>
	);
};
