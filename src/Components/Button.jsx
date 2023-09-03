import React from 'react';
import styled from 'styled-components';
export default function Button({ text, onClick, className }) {
	return (
		<ButtonTap>
			<Buttons className={className} onClick={onClick}>
				{text}
			</Buttons>
		</ButtonTap>
	);
}

const Buttons = styled.button`
	border: 1px solid black;
	width: 30rem;
	padding: 0.5rem;
	&:hover {
		background: var(--color-brand);
		background: var(--color-grad);
		color: var(--color-white);
		border: 1px solid var(--color-white);
	}
`;
const ButtonTap = styled.div`
	display: flex;
	flex-direction: column;
`;
