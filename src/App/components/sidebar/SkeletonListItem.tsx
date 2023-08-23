import { Box, Skeleton } from '@mui/material';

export const SkeletonListItem = () => {
	return (
		<Box sx={{ width: 250, padding: '0px 20px' }}>
			<Skeleton animation="wave" />
			<br />
			<Skeleton animation="wave" />
			<br />
			<Skeleton animation="wave" />
			<br />
			<Skeleton animation="wave" />
			<br />
			<Skeleton animation="wave" />
		</Box>
	);
};
