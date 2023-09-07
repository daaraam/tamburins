import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { addOrUpdateToCart } from '../API/firebase';
import Button from '../Components/Button';
import { TitleLetter } from '../Components/CartContents';
import { useAuthContext } from '../Context/AuthContext';
import { numberWithCommas } from '../Util/numberWithCommas';

export default function ProductsDetail() {
	const { uid } = useAuthContext();

	const {
		state: {
			product: { category, description, title, price, url, info, options, id },
		},
	} = useLocation();
	const [selected, setSelected] = useState(options && options[0]);

	const handleSelect = e => {
		setSelected(e.target.value);
	};
	const cartHandler = e => {
		const product = { category, id, url, title, price, option: selected, quantity: 1 };
		addOrUpdateToCart(uid, product);
	};

	return (
		<div className="flex flex-row justify-center px-10 gap-x-10">
			<img className="w-2/5" src={url} alt="상품이미지" />
			<div className="w-2/5 px-5 mt-7">
				<p className="text-xs">{category}</p>
				<div className="flex items-center justify-between">
					<TitleLetter>{title}</TitleLetter>
					<p>{numberWithCommas(price)}</p>
				</div>
				<p>{description}</p>
				<Info className="w-full mt-10 text-ellipsis">{info}</Info>
				<div className="flex flex-col items-center justify-center pt-10">
					<select className="w-4/5 p-2" value={selected} onChange={handleSelect}>
						{options && options.map((option, index) => <option key={index}>{option}</option>)}
					</select>
					<Button text={'Add to cart'} className="w-4/5 mt-10 text-white bg-black " onClick={cartHandler} />
				</div>
			</div>
		</div>
	);
}

export const Title = styled.p`
	font-family: 'KBO-Dia-Gothic_bold';
	font-size: 2rem;
`;

const Info = styled.p`
	word-spacing: 4px;
	line-height: 1.8rem;
`;
