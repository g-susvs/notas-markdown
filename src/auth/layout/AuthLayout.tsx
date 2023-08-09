import { Grid, Typography } from '@mui/material';

interface props {
	title: string;
	children: JSX.Element;
}

export const AuthLayout = ({ children, title }: props) => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
		>
			<Grid
				item
				className="box-shadow"
				xs={3}
				sx={{
					width: { sm: 450 },
					backgroundColor: 'white',
					padding: 3,
					borderRadius: 2,
				}}
			>
				<Typography variant="h5" sx={{ mb: 1, textAlign: 'center    ' }}>
					{title}
				</Typography>

				{children}
			</Grid>
		</Grid>
	);
};
