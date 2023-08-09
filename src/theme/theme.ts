import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
	palette: {
		primary: {
			main: '#6c63ff',
			light: '#DDDAFF',
			dark: '#453F8C',
		},
		secondary: {
			main: '#6F6F6F',
		},
		error: {
			main: '#CB0000',
			light: '#FFB8B8',
			dark: '#6B0000',
		},
	},
});
