import React from 'react';
import styled from 'styled-components';
export default function MobileButton({ text, onClick, className }) {
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
	width: 20rem;
	padding: 0.2rem;
`;
const ButtonTap = styled.div`
	display: flex;
	flex-direction: column;
`;
