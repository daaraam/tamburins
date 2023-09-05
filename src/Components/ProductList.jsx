import React from 'react';

export default function ProductList({ url, description, price, title }) {
	const numberWithCommas = price => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	return (
		<li className="p-3 rounded-lg overflow-hidden cursor-pointer">
			<p className="flex justify-center items-center flex-col">
				<img className="w-full h-96 mb-3" src={url} alt="product_image" />
			</p>
			<div className="flex flex-col gap-y-1">
				<p className="font-light text-xs">{description}</p>
				<p className="font-bold text-lg">{title}</p>
				<p className="text-xs">{`${numberWithCommas(price)}원`}</p>
			</div>
		</li>
	);
}
