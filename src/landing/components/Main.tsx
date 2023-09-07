import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
export const Main = () => {
	return (
		<Grid container spacing={2} marginTop={'100px'}>
			<Grid item xs={12} sm={6}>
				<Grid
					container
					direction="column"
					alignItems="start"
					justifyContent="center"
				>
					<Typography
						sx={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '2rem' }}
					>
						Simplifica la forma en que tomas y organizas tus apuntes. Captura tus pensamientos y conocimientos de manera eficiente
						utilizando el lenguaje Markdown para dar formato a tus notas.
					</Typography>
					<RouterLink to="/auth/login">
						<Button variant="contained">Inicar sesión</Button>
					</RouterLink>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Box sx={{}}>
					<img
						alt="img-app"
						className="img-landing"
						src="/notes.png"
						style={{ width: '100%', height: '100%' }}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
