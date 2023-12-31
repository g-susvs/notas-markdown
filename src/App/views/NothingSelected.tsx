import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Box, Grid, Typography } from '@mui/material';
import { LayoutContentView } from './LayoutView';

export const NothingSelected = () => {
	return (
		<LayoutContentView>
			<Grid
				container
				spacing={0}
				direction="column"
				justifyContent="center"
				alignItems="center"
				sx={{ minHeight: 'calc(100vh - 30vh)' }}
			>
				<Grid item xs={12}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<TextSnippetIcon
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
							Selcciona una nota
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</LayoutContentView>
	);
};
