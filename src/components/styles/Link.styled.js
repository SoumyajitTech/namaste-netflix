import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
	appearance: none;
	background: none;
	letter-spacing: inherit;
	line-height: inherit;
	margin: 0;
	padding: 0;
	text-decoration: none;
	cursor: pointer;
	margin: 0 auto;

	&:hover {
		color: rgba(255, 255, 255, 0.7);
		text-decoration: underline;
	}
`;
