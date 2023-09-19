import React from 'react';
import styled from 'styled-components';
import { IsMobile } from '../Responsive';

export default function CategoryList({ onClick, IMAGE, ALT, TEXT }) {
	const isPhone = IsMobile();
	return (
		<>
			{isPhone ? (
				<li className="flex flex-col items-center" onClick={onClick}>
					<MobileImg src={IMAGE} alt={ALT} />
					<p className="text-xs ">{TEXT}</p>
				</li>
			) : (
				<li className="flex flex-col items-center" onClick={onClick}>
					<Img src={IMAGE} alt={ALT} />
					<p className="text-s">{TEXT}</p>
				</li>
			)}
		</>
	);
}

const Img = styled.img`
	height: 6rem;
	width: 6rem;
	margin: 0.5rem;
	border-radius: 100%;
	cursor: pointer;
	&:active {
		padding: 0.3rem;
		background: var(--color-grad);
	}
`;

const MobileImg = styled.img`
	height: 5rem;
	width: 5rem;
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 100%;
	cursor: pointer;
	&:active {
		padding: 0.3rem;
		background: var(--color-grad);
	}
`;
