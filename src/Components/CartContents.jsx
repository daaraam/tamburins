import React, { useState } from 'react';
import styled from 'styled-components';
import useCarts from '../Hooks/useCarts';
import { numberWithCommas } from '../Util/numberWithCommas';

export default function CartContents({ product, product: { url, category, title, price, option, quantity, id } }) {
	const { removeItem, addOrUpdateItem } = useCarts();
	const [optionSelect, setOptionSelect] = useState(quantity);

	const maxQuantity = 10; // 최대로 허용할 수량
	const optionValues = Array.from({ length: Math.min(quantity + maxQuantity, maxQuantity) }, (_, index) => index + 1);

	const handleOptionSelect = e => {
		const { value } = e.target;
		setOptionSelect(value);
		addOrUpdateItem.mutate({ ...product, quantity: value });
	};

	const removeHandler = e => {
		removeItem.mutate(id);
	};

	return (
		<ul className="flex items-center justify-center pb-3 gap-11">
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
						{optionValues.map(number => (
							<option key={number} value={number}>
								{number}
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
		</ul>
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
