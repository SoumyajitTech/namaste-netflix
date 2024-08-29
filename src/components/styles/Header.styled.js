import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	padding-top: 1.5rem;
	width: 100%;
	padding-bottom: 1.5rem;
	z-index: 99;

	div {
		width: 80%;
		margin: auto;
		left: 0;
		right: 0;
	}

	button {
		border-radius: 6px;
	}
`;

export const Logo = styled.img`
	width: 9.25rem;
	height: 2.5rem;
	color: rgb(229, 9, 20);
	fill: currentColor;
	display: block;
`;
