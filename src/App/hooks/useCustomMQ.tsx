import { useMediaQuery } from '@mui/material';

export const useCustomMQ = () => {
	const mediaQuery = useMediaQuery('(min-width:600px)');

	return {
		mediaQuery,
	};
};
