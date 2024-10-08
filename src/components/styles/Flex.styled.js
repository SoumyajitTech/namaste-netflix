import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	justify-content: ${({ $justify }) => $justify || 'space-between'};
	align-items: ${({ $align }) => $align || 'center'};
	gap: ${({ $gap }) => ($gap ? `${$gap}px` : '16px')};
`;
