import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useUiStore } from '../../../hooks/useUiStore';

export const MenuEditor = () => {
	const { openEditor, onToggleEditor } = useUiStore();

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
					onClick={onToggleEditor}
					startIcon={!openEditor ? <EditIcon /> : <VisibilityIcon />}
					sx={{ width: '100px' }}
				>
					{!openEditor ? 'Editor' : 'Vista'}
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
