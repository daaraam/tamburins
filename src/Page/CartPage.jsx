import React from 'react';
import CartContents from '../Components/CartContents';
import PriceCard from '../Components/PriceCard';
import useCarts from '../Hooks/useCarts';
import empty from '../Image/home-4.jpg';
import { IsMobile } from '../Responsive';

export default function CartPage() {
	const {
		CartsQuery: { data: products, error, isLoading },
	} = useCarts();

	const totalPrice = products && products.reduce((prev, cur) => prev + parseInt(cur.price) * cur.quantity, 0);
	let SHIPPING = totalPrice > 30000 ? 0 : 3000;

	if (isLoading) return <p>isLoading</p>;
	const hasProducts = products && products.length > 0;

	const isPhone = IsMobile();

	return (
		<>
			{error && <p>error</p>}
			{isPhone ? (
				<div>
					<ul className="w-full">
						<li>{!hasProducts && <img src={empty} alt={empty} />}</li>
						<li>
							{products && products.map(product => <CartContents key={product.id} product={product} />)}
						</li>
					</ul>
					<PriceCard totalPrice={totalPrice} SHIPPING={SHIPPING} />
				</div>
			) : (
				<div className="grid justify-center grid-cols-2 px-32 py-11 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-col-2">
					<ul>
						<li className="flex px-11">{!hasProducts && <img src={empty} alt={empty} />}</li>
						<li>
							{products && products.map(product => <CartContents key={product.id} product={product} />)}
						</li>
					</ul>
					<PriceCard totalPrice={totalPrice} SHIPPING={SHIPPING} />
				</div>
			)}
		</>
	);
}
