import styled from 'styled-components';
import theme from '../../Utils/customTheme';

export const Input = styled.input`
	padding: 1rem;
	background: rgba(22, 22, 22, 0.7);
	border-radius: 0.25rem;
	border-width: 0.0625rem;
	border-color: rgba(128, 128, 128, 0.7);
	width: 100%;

	&:user-valid {
		border-color: green;
	}

	&.error {
		border-color: ${theme.colors.red};
	}

	&:focus {
		outline: none;
	}
`;

export const ErrorMessage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 4px;
	color: ${theme.colors.red};
	font-size: small;
	margin-left: 2px;

	img {
		position: unset !important;
		width: 14px !important;
		height: 14px !important;
	}
`;
