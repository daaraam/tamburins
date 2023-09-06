import React from 'react';
import styled from 'styled-components';
import blooming from '../Image/blooming.jpg';
import camo from '../Image/camo.jpg';
import candle from '../Image/candle.png';
import pair from '../Image/pair.jpg';
import santizer from '../Image/santizer.png';
import soap from '../Image/soap.png';

export default function CategoryBar({ setSelectedCategory }) {
	const CategoryHandler = categoryName => {
		setSelectedCategory(categoryName);
	};

	return (
		<ul className="flex items-center justify-center mb-5 gap-x-2 mt-11">
			{/* <li className="flex flex-col items-center">
				<Img src={all} alt="logo" />
				<p className="text-xs">전체보기</p>
			</li> */}
			<li
				className="flex flex-col items-center"
				onClick={() => {
					CategoryHandler('퍼퓸');
				}}
			>
				<Img src={camo} alt="camo" />
				<p className="text-xs">퍼퓸</p>
			</li>
			<li
				className="flex flex-col items-center"
				onClick={() => {
					CategoryHandler('퍼퓸 밤');
				}}
			>
				<Img src={pair} alt="pair" />
				<p className="text-xs">퍼퓸 밤</p>
			</li>
			<li
				className="flex flex-col items-center"
				onClick={() => {
					CategoryHandler('올팩티브 캔들');
				}}
			>
				<Img src={candle} alt="candle" />
				<p className="text-xs">올팩티브 캔들</p>
			</li>
			<li
				className="flex flex-col items-center"
				onClick={() => {
					CategoryHandler('손 소독제');
				}}
			>
				<Img src={santizer} alt="santizer" />
				<p className="text-xs">손 소독제</p>
			</li>
			<li
				className="flex flex-col items-center"
				onClick={() => {
					CategoryHandler('향 오브젝트');
				}}
			>
				<Img src={blooming} alt="blooming" />
				<p className="text-xs">향 오브젝트</p>
			</li>
			<li
				className="flex flex-col items-center"
				onClick={() => {
					CategoryHandler('퍼퓸 비누');
				}}
			>
				<Img src={soap} alt="soap" />
				<p className="text-xs">퍼퓸 비누</p>
			</li>
		</ul>
	);
}

const Img = styled.img`
	height: 6rem;
	width: 6rem;
	margin: 0.5rem;
	border-radius: 100%;
	cursor: pointer;
	&:hover {
		border: 1.5px solid black;
		padding: 0.2rem;
	}
`;
