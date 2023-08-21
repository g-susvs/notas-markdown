import { Box, CircularProgress, Grid } from '@mui/material';

export const AuthLoader = () => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			position="absolute"
			top={0}
			left={0}
			sx={{
				minHeight: '100vh',
				background: 'rgba(53, 53, 53, 0.288)',
				opacity: 5,
				padding: 4,
				zIndex: 10,
			}}
		>
			<Grid item>
				<Box>
					<CircularProgress />
				</Box>
			</Grid>
		</Grid>
	);
};
