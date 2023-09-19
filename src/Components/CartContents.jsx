import React, { useState } from 'react';
import styled from 'styled-components';
import useCarts from '../Hooks/useCarts';
import { IsMobile } from '../Responsive';
import { numberWithCommas } from '../Util/numberWithCommas';

export default function CartContents({ product, product: { url, category, title, price, options, quantity, id } }) {
	const { removeItem, addOrUpdateItem } = useCarts();
	const [quantitySelect, setQuantitySelect] = useState(quantity);

	const maxQuantity = 10; // 최대로 허용할 수량
	const quantityValues = Array.from(
		{ length: Math.min(quantity + maxQuantity, maxQuantity) },
		(_, index) => index + 1,
	);

	const handleQuantitySelect = e => {
		const { value } = e.target;
		setQuantitySelect(value);
		addOrUpdateItem.mutate({ ...product, quantity: value });
	};

	const removeHandler = e => {
		removeItem.mutate(id);
	};

	const isPhone = IsMobile();

	return (
		<>
			{isPhone ? (
				<ul>
					<li className="flex items-center pb-3 gap-x-2">
						<MobileImg src={url} className="flex w-32" alt="cartImg" />
						<div className="flex flex-col w-56">
							<div className="flex items-center justify-between w-full gap-x-5 ">
								<MobileTitleLetter>{title}</MobileTitleLetter>
							</div>
							<p className="text-xs">{category}</p>
							<p className="text-xs ">{options}</p>
							<select
								className="w-16 border border-zinc-300"
								value={quantitySelect}
								onChange={handleQuantitySelect}
							>
								{quantityValues.map(number => (
									<option key={number} value={number}>
										{number}
									</option>
								))}
							</select>
						</div>
						<section className="flex flex-col items-center justify-between h-20 py-1">
							<p className="text-xs">{numberWithCommas(price)}</p>
							<button
								className="text-xs text-gray-400 underline decoration-gray-400 underline-offset-3"
								onClick={removeHandler}
							>
								삭제
							</button>
						</section>
					</li>
				</ul>
			) : (
				<ul className="flex items-center justify-center pb-3 gap-11">
					<img src={url} className="flex justify-center w-32" alt="cartImg" />
					<List>
						<div className="flex justify-between gap-x-5">
							<TitleLetter>{title}</TitleLetter>
							<p>{numberWithCommas(price)}</p>
						</div>
						<p>{category}</p>
						<p className="pt-3">{options}</p>
						<section className="flex items-center justify-between pt-3">
							<select
								className="w-12 border border-zinc-300"
								value={quantitySelect}
								onChange={handleQuantitySelect}
							>
								{quantityValues.map(number => (
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
			)}
		</>
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

export const MobileTitleLetter = styled.p`
	font-size: 0.8rem;
	color: var(--color-black);
	font-family: 'GowunDodum-Regular';
	font-weight: 700;
`;

const MobileImg = styled.img`
	width: 4rem;
	height: 4rem;
	padding-left: 1rem;
`;
