import styled from 'styled-components';

export const Grid = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ $justify }) => $justify || 'center'};
	-webkit-flex-direction: ${({ $justify }) => $justify || 'center'};
	-ms-flex-direction: ${({ $justify }) => $justify || 'center'};
	align-items: ${({ $align }) => $align};
	gap: ${({ $gap }) => $gap || '16px'};
`;
