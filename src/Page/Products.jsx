import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getProducts } from '../API/firebase';
import CategoryBar from '../Components/CategoryBar';
import ProductCard from '../Components/ProductCard';
import banner from '../Image/banner.jpg';

export default function Products() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const { error, data: products } = useQuery(['products', selectedCategory], () => getProducts(selectedCategory));

	return (
		<div>
			<img src={banner} alt="banner" />

			{error && <p className="flex justify-center py-3 text-lg text-white bg-red-300">로그인이 필요합니다.</p>}
			<div className="px-12">
				<CategoryBar setSelectedCategory={setSelectedCategory} />
				<ul className="grid grid-cols-1 gap-1 mx-10 md:gird-cols-3 lg:grid-cols-4">
					{products &&
						products.map(product => (
							<ProductCard
								key={product.id}
								product={product}
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
							/>
						))}
				</ul>
			</div>
		</div>
	);
}
