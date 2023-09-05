import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import FooterDesign from './Components/FooterDesign';
import NavBar from './Components/NavBar';
import { AuthContextProvider } from './Context/AuthContext';

const queryClient = new QueryClient();
export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<NavBar />
				<Outlet />
				<FooterDesign />
			</AuthContextProvider>
		</QueryClientProvider>
	);
}
