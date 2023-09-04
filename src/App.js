import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import FooterDesign from './Components/FooterDesign';
import NavBar from './Components/NavBar';
import { AuthContextProvider } from './Context/AuthContext';

export default function App() {
	const queryClient = new QueryClient();
	return (
		<AuthContextProvider>
			<NavBar />
			<QueryClientProvider client={queryClient}>
				<Outlet />
				<FooterDesign />
			</QueryClientProvider>
		</AuthContextProvider>
	);
}
