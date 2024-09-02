import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HeaderComponent from './Components/Header';
import { GlobalStyle } from './Components/styles/Global.styled';
import { addUserDetails, removeUserDetails } from './Services/store/userSlice';
import theme from './Utils/customTheme';
import { auth } from './Utils/firebase.config';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, displayName, email, refreshToken } = user;
				dispatch(addUserDetails({ uid, displayName, email, refreshToken }));
			} else {
				// User is signed out
				dispatch(removeUserDetails());
			}
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<div className='app'>
				<GlobalStyle />
				<HeaderComponent />
				<Outlet />
			</div>
		</ThemeProvider>
	);
};

export default App;
