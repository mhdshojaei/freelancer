/** @format */

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';
import OwnerDashboard from './pages/OwnerDashboard';
const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />

			<Routes>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='/auth'
					element={<Auth />}
				/>

				<Route
					path='/owner'
					element={<AppLayout />}>
					<Route
						path='dashboard'
						element={<OwnerDashboard />}
					/>
					<Route
						path='projects'
						element={<OwnerDashboard />}
					/>
				</Route>
				<Route
					path='/complete-profile'
					element={<CompleteProfile />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</QueryClientProvider>
	);
}

export default App;
