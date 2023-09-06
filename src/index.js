import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './Page/ErrorPage';
import Home from './Page/Home';
import Login from './Page/Login';
import NewProducts from './Page/NewProducts';
import Products from './Page/Products';
import ProductsDetail from './Page/ProductsDetail';
import SignUp from './Page/SignUp';
import RouteProtector from './RouteProtector';
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, path: '/', element: <Home /> },
			{ path: '/products', element: <Products /> },
			{ path: '/products/:id', element: <ProductsDetail /> },
			{ path: '/login', element: <Login /> },
			{ path: '/signup', element: <SignUp /> },

			{
				path: '/new',
				element: (
					<RouteProtector>
						<NewProducts />
					</RouteProtector>
				),
			},
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
