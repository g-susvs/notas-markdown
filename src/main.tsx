import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import { AppTheme } from './theme/AppTheme.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ReactQueryDevtools } from 'react-query/devtools';

import './index.css';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools />
					<AppTheme>
						<AppRouter />
					</AppTheme>
				</QueryClientProvider>
			</BrowserRouter>
		</Provider>,
	</React.StrictMode>,
);
