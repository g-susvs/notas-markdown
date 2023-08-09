import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { appTheme } from './theme';

interface props {
	children: JSX.Element;
}

export const AppTheme = ({ children }: props) => {
	return (
		<ThemeProvider theme={appTheme}>
			<CssBaseline />

			{children}
		</ThemeProvider>
	);
};
