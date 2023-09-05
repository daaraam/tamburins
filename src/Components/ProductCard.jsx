import React from 'react';
import ProductList from './ProductList';

export default function ProductCard({ product: { category, description, title, price, url }, selectedCategory }) {
	return (
		<>
			{category === selectedCategory && (
				<ProductList url={url} description={description} title={title} price={price} />
			)}
		</>
	);
}
