import styled from 'styled-components';
import theme from '../../Utils/customTheme';

export const RedButton = styled.button`
	background: ${theme.colors.red};
	border-radius: 3px;
	border: ${theme.colors.red};
	color: ${theme.colors.white};
	fill: ${theme.colors.white};
	font-size: 1rem;
	font-weight: 500;
	min-height: 2.5rem;
	padding: 0.375rem 1rem;
	border-radius: 0.25rem;

	&:hover {
		transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
		background: rgb(193, 17, 25);
	}
`;

export const TransperentButton = styled.button`
	background: ${theme.colors.transperentWhite};
	border-radius: 3px;
	border: ${theme.colors.transperentWhite};
	color: ${theme.colors.white};
	font-size: 1rem;
	font-weight: 500;
	min-height: 2.5rem;
	padding: 0.375rem 1rem;
	border-radius: 0.25rem;

	&:hover {
		transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
		background: #8080804d;
		border-color: black;
	}
`;
