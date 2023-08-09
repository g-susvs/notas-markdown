import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const NotFound = () => {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			sx={{ minHeight: '100vh', backgroundColor: 'white', padding: 4 }}
		>
			<Grid item>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
				>
					<Typography
						variant="h1"
						textAlign="center"
						sx={{ fontSize: '10rem', fontWeight: 800, color: 'primary.main' }}
					>
						404
					</Typography>
					<Typography
						textAlign="center"
						sx={{ fontSize: '1.6rem', color: '#555555' }}
					>
						Hmmm! No encontramos lo que buscabas
					</Typography>
					<Box marginTop={6}>
						<RouterLink to="/">
							<Button variant="contained">
								<ArrowBackIosIcon />
								Volver al inicio
							</Button>
						</RouterLink>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};
