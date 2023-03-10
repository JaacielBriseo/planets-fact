import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app';
import { PlanetsSite } from './PlanetsSite';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PlanetsSite />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
