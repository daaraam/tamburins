import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ImCart } from 'react-icons/im';
import { getCart } from '../API/firebase';
import { useAuthContext } from '../Context/AuthContext';

export default function CartStatus({ modalOpen }) {
	const { uid } = useAuthContext();
	const { data: products } = useQuery(['carts'], () => getCart(uid));
	return (
		<div className="relative">
			<ImCart size={20} cursor="pointer" onClick={modalOpen} />
			{products && <p className="absolute w-5 h-5 text-center -top-5 -right-4">{products.length}</p>}
		</div>
	);
}
