import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TitleLetter } from '../Components/CartContents';
import CartModal from '../Components/CartModal';
import { useModal } from '../Context/ModalContext';
import useCarts from '../Hooks/useCarts';
import { IsMobile } from '../Responsive';
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

	const cartHandler = e => {
		const product = { category, id, url, title, price, description, options, info, quantity: 1 };
		addOrUpdateItem.mutate(product, {
			onSuccess: () => {
				openModal();
				setQuantity(quantity);
			},
		});
	};

	const isPhone = IsMobile();

	return (
		<>
			{isPhone ? (
				<div>
					<img className="w-full" src={url} alt="상품이미지" />
					<section className="p-5">
						<p className="text-xs">{category}</p>
						<div className="flex items-center justify-between">
							<TitleLetter>{title}</TitleLetter>
							<p>{numberWithCommas(price)}</p>
						</div>
						<p>{description}</p>
						<p className="font-bold">{options}</p>
						<Info className="w-full mt-10 text-ellipsis">{info}</Info>
					</section>
					<div className="flex flex-col items-center justify-center">
						<CartModal url={url} title={title} cartHandler={cartHandler} />
					</div>
				</div>
			) : (
				<div className="flex flex-row justify-center px-10 gap-x-10">
					<img className="w-2/5" src={url} alt="상품이미지" />
					<div className="w-2/5 px-5 mt-7">
						<p className="text-xs">{category}</p>
						<div className="flex items-center justify-between">
							<TitleLetter>{title}</TitleLetter>
							<p>{numberWithCommas(price)}</p>
						</div>
						<p>{description}</p>
						<p className="font-bold">{options}</p>

						<Info className="w-full mt-10 text-ellipsis">{info}</Info>
						<div className="flex flex-col items-center justify-center pt-10">
							<CartModal url={url} title={title} cartHandler={cartHandler} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

const Info = styled.p`
	word-spacing: 4px;
	line-height: 1.8rem;
`;
