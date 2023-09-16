import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TitleLetter } from '../Components/CartContents';
import CartModal from '../Components/CartModal';
import { useModal } from '../Context/ModalContext';
import useCarts from '../Hooks/useCarts';
import { numberWithCommas } from '../Util/numberWithCommas';

export default function ProductsDetail() {
	const { openModal } = useModal();
	const { addOrUpdateItem } = useCarts();
	const [quantity, setQuantity] = useState(1);
	const {
		state: {
			product: { category, description, title, price, url, info, options, id },
		},
	} = useLocation();
	const [selected, setSelected] = useState(options && options[0]);

	const cartHandler = e => {
		const product = { category, id, url, title, price, description, info, options, quantity };
		addOrUpdateItem.mutate(product, {
			onSuccess: () => {
				openModal();
				setQuantity(prevQuantity => prevQuantity + 1);
			},
		});
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
					<select
						className="w-4/5 p-2"
						value={selected}
						onChange={e => {
							setSelected(e.target.value);
						}}
					>
						{options && options.map((option, index) => <option key={index}>{option}</option>)}
					</select>
					<CartModal url={url} title={title} cartHandler={cartHandler} />
				</div>
			</div>
		</div>
	);
}

const Info = styled.p`
	word-spacing: 4px;
	line-height: 1.8rem;
`;
