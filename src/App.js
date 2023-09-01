import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import NavBar from './Components/NavBar';

export default function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<NavBar />
			<QueryClientProvider client={queryClient}>
				<Outlet />
			</QueryClientProvider>
		</>
	);
}
