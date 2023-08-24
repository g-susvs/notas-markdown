import ErrorIcon from '@mui/icons-material/Error';
import { Box, Grid, Typography } from '@mui/material';

export const NotFoundNote = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ minHeight: '100vh' }}
		>
			<Grid item xs={12}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<ErrorIcon
						sx={{
							color: 'primary.main',
							fontSize: '4rem',
						}}
					/>
					<Typography
						sx={{
							fontSize: '2rem',
							color: '#444444',
						}}
					>
						No se encontro la nota
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};
