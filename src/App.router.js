import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import LoginComponent from './components/Login';
import SignUpComponent from './components/SignUp';

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Navigate to={'sign-up'} replace />,
			},
			{
				path: 'login',
				element: <LoginComponent />,
			},
			{
				path: 'sign-up',
				element: <SignUpComponent />,
			},
		],
	},
]);

export default appRouter;
