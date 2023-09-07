import React from 'react';
import CartContents from '../Components/CartContents';
import PriceCard from '../Components/PriceCard';
import { useAuthContext } from '../Context/AuthContext';
import useCarts from '../Hooks/useCarts';
import empty from '../Image/home-4.jpg';

export default function CartPage() {
	const SHIPPING = 3000;
	const { uid } = useAuthContext();
	// const { data: products, error, isLoading } = useQuery(['carts'], () => getCart(uid));
	const {
		getCart: { data: products, error, isLoading },
	} = useCarts();

	const totalPrice = products && products.reduce((prev, cur) => prev + parseInt(cur.price) * cur.quantity, 0);

	if (isLoading) return <p>isLoading</p>;
	const hasProducts = products && products.length > 0;

	return (
		<div className="grid justify-center grid-cols-2 px-32 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-col-2">
			{error && <p>error</p>}

			<ul>
				<li className="flex px-11">{!hasProducts && <img src={empty} alt={empty} />}</li>
				<li>
					{products &&
						products.map(product => (
							<CartContents key={product.id} product={product} products={products} />
						))}
				</li>
			</ul>
			<PriceCard totalPrice={totalPrice} SHIPPING={SHIPPING} />
		</div>
	);
}