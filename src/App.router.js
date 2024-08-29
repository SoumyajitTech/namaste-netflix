import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import LoginComponent from './components/Login';

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Navigate to={'login'} replace />,
			},
			{
				path: 'login',
				element: <LoginComponent />,
			},
			{
				path: 'sign-up',
				element: <LoginComponent />,
			},
		],
	},
]);

export default appRouter;
