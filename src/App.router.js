import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import BrowserComponent from './Pages/Browser';
import LoginComponent from './Pages/Login';
import SignUpComponent from './Pages/SignUp';

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
			{
				path: 'browse',
				element: <BrowserComponent />,
			},
		],
	},
]);

export default appRouter;
