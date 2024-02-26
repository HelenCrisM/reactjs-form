import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import CompletedForm from './pages/CompletedForm/index.tsx';
import Error404 from './pages/Error404/index.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<App />} />
			<Route path="/CompletedForm" element={<CompletedForm />} />
			<Route path="*" element={<Error404 />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
