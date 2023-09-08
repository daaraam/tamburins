import React from 'react';
import { ImCart } from 'react-icons/im';
import useCarts from '../Hooks/useCarts';

export default function CartStatus({ modalOpen }) {
	const {
		CartsQuery: { data: products },
	} = useCarts();
	return (
		<div className="relative">
			<ImCart size={20} cursor="pointer" onClick={modalOpen} />
			{products && <p className="absolute w-5 h-5 font-bold text-center -top-3 -right-4">{products.length}</p>}
		</div>
	);
}
