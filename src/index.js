import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Account from './Page/Account';
import ErrorPage from './Page/ErrorPage';
import Home from './Page/Home';
import Login from './Page/Login';
import Shop from './Page/Shop';
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, path: '/', element: <Home /> },
			{ path: '/shop', element: <Shop /> },
			{ path: '/login', element: <Login /> },
			{ path: '/account', element: <Account /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

reportWebVitals();
