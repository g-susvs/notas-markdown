import { Box, Skeleton } from '@mui/material';

export const LodingNoteEditor = () => {
	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				p: 3,
				marginTop: 6,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingBottom: 2,
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<Skeleton
						animation="wave"
						variant="rounded"
						width={100}
						height={40}
					/>
					<Skeleton animation="wave" variant="rounded" width={40} height={20} />
				</Box>

				<Skeleton animation="wave" variant="rounded" width={100} height={40} />
			</Box>
			<Skeleton animation="wave" width="100%" height={400} />
		</Box>
	);
};
