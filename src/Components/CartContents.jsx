import React, { useState } from 'react';
import styled from 'styled-components';
import { addOrUpdateToCart, removeFromCart } from '../API/firebase';
import { useAuthContext } from '../Context/AuthContext';
import { numberWithCommas } from '../Util/numberWithCommas';

export default function CartContents({ product, product: { url, category, title, price, option, quantity, id } }) {
	const { uid } = useAuthContext();

	const removeHandler = e => {
		const product = { category, id, url, title, price, option, quantity };
		removeFromCart(uid, product);
		addOrUpdateToCart(uid, product);
	};

	const [optionSelect, setOptionSelect] = useState(quantity);

	//카테고리 드롭박스를 출력할 함수
	const handleOptionSelect = e => {
		const { value } = e.target;
		setOptionSelect(value);
		addOrUpdateToCart(uid, { ...product, quantity: value });
	};

	const optionValues = [];
	for (let i = quantity; i <= quantity + 10; i++) {
		optionValues.push(i);
	}

	return (
		<div className="flex items-center justify-center pb-3 gap-11">
			<img src={url} className="flex justify-center w-32" />
			<List>
				<div className="flex justify-between ">
					<TitleLetter>{title}</TitleLetter>
					<p>{numberWithCommas(price)}</p>
				</div>
				<p>{category}</p>
				<p className="pt-3">{option}</p>
				<section className="flex items-center justify-between pt-3">
					<select className="w-12 border border-zinc-300" value={optionSelect} onChange={handleOptionSelect}>
						{optionValues.map(value => (
							<option key={value} value={value}>
								{value}
							</option>
						))}
					</select>
					<button
						className="text-gray-400 underline decoration-gray-400 underline-offset-3"
						onClick={removeHandler}
					>
						삭제
					</button>
				</section>
			</List>
		</div>
	);
}

const List = styled.li`
	width: 50rem;
	display: flex;
	background-color: white;
	padding-right: 5rem;
	flex-direction: column;
`;

export const TitleLetter = styled.p`
	font-size: 1.3rem;
	color: var(--color-black);
	font-family: 'GowunDodum-Regular';
	font-weight: 700;
`;
