import React from 'react';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from '../Util/numberWithCommas';
import { TitleLetter } from './CartContents';

export default function ProductCard({
	product,
	selectedCategory,
	product: { category, description, title, price, url, id },
}) {
	const navigate = useNavigate();

	return (
		<>
			{category === selectedCategory && (
				<li className="p-3 overflow-hidden rounded-lg cursor-pointer">
					<p className="flex flex-col items-center justify-center">
						<img
							className="w-full mb-3 h-96"
							src={url}
							alt="product_image"
							onClick={() => {
								navigate(`/products/${id}`, { state: { product } });
							}}
						/>
					</p>
					<div className="flex flex-col gap-y-1">
						<p className="text-xs font-light">{description}</p>
						<TitleLetter className="text-xl">{title}</TitleLetter>
						<p className="text-xs">{`${numberWithCommas(price)}`}</p>
					</div>
				</li>
			)}
		</>
	);
}
