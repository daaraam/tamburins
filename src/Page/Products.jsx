import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getProducts } from '../API/firebase';
import CategoryBar from '../Components/CategoryBar';
import ProductCard from '../Components/ProductCard';
import banner from '../Image/banner.jpg';

export default function Products() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const {
		error,
		isLoading,
		data: products,
	} = useQuery(['products', selectedCategory], () => getProducts(selectedCategory));

	return (
		<div>
			<img src={banner} alt="banner" />
			<div className="px-12">
				{isLoading && <p>loading</p>}
				{error && <p>err</p>}
				<CategoryBar products={products} setSelectedCategory={setSelectedCategory} />
				<ul className="grid grid-cols-1 md:gird-cols-3 lg:grid-cols-4 gap-1 mx-10">
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
