import React, { useState } from 'react';
import CategoryBar from '../Components/CategoryBar';
import CategoryProducts from '../Components/CategoryProducts';
import ProductsCards from '../Components/ProductsCards';
import useProducts from '../Hooks/useProducts';
import banner from '../Image/banner.jpg';

export default function Products() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const {
		ProductsQuery: { error, data: products },
	} = useProducts();

	return (
		<div>
			<img src={banner} alt="banner" />

			{error && <p className="flex justify-center py-3 text-lg text-white bg-red-300">로그인이 필요합니다.</p>}

			{/* 카테고리 선택시 */}
			<div className="px-12">
				<CategoryBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
				{selectedCategory !== '' && (
					<ul className="grid lg:gap-1 xl:mx-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
						{products &&
							products.map(product => (
								<CategoryProducts
									key={product.id}
									product={product}
									selectedCategory={selectedCategory}
									setSelectedCategory={setSelectedCategory}
								/>
							))}
					</ul>
				)}

				{/* 카테고리 선택X 전체보기 */}
				<div>
					{selectedCategory === '' ||
						(selectedCategory === null && (
							<ul className="grid lg:gap-1 xl:mx-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
								{products &&
									products.map(product => <ProductsCards key={product.id} product={product} />)}
							</ul>
						))}
				</div>
			</div>
		</div>
	);
}
