import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppTheme } from './theme/AppTheme.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppTheme>
				<AppRouter />
			</AppTheme>
		</BrowserRouter>
	</React.StrictMode>,
);
