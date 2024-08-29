import styled from 'styled-components';

export const Login = styled.div`
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow: hidden;
	z-index: 0;

	img {
		position: absolute;
		height: 100%;
		width: 100%;
		opacity: 0.6;
	}
`;

export const LoginForm = styled.div`
	position: relative;
	background-color: #000000bd;
	border-radius: 4px;
	box-sizing: border-box;
	margin: auto;
	min-width: 450px;
	min-height: 640px;
	padding: 48px 68px;

	h1 {
		margin-bottom: 28px;
	}
	p,
	a {
		text-align: center;
	}
`;
