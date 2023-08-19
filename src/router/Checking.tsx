import { Box, CircularProgress, Grid } from '@mui/material';

export const Checking = () => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ minHeight: '100vh', backgroundColor: 'white', padding: 4 }}
		>
			<Grid item>
				<Box>
					<CircularProgress />
				</Box>
			</Grid>
		</Grid>
	);
};
