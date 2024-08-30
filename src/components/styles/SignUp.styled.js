import styled from 'styled-components';

export const SignUp = styled.div`
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	z-index: 0;
`;

export const MainContainer = styled.div`
	position: relative;
	margin: auto;
	right: 0;
	left: 0;
	width: 30%;
	text-align: center;

	h1 {
		font-size: 4rem;
		line-height: 4rem;
	}

	p {
		margin-top: 1rem;
		font-size: 1.25rem;
		font-weight: 500;
		margin-bottom: 2rem;
		color: rgb(255, 255, 255);
	}

	h3 {
		color: rgb(255, 255, 255);
	}

	button {
		display: flex;
		align-items: center;
		gap: 16px;
		font-size: 1.3rem;
		white-space: nowrap;

		svg {
			width: 16px;
			height: 16px;
		}

		a {
			display: flex;
			align-items: center;
			gap: 16px;
		}
	}
`;
