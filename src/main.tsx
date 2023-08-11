import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppTheme } from './theme/AppTheme.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AppTheme>
					<AppRouter />
				</AppTheme>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
