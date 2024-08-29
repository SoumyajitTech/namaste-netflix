import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HeaderComponent from './components/Header';
import { GlobalStyle } from './components/styles/Global.styled';
import theme from './utils/customTheme';

const App = () => {
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
