import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleLetter } from '../Components/CartContents';
import CategoryBar from '../Components/CategoryBar';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useProducts';
import banner from '../Image/banner.jpg';
import { numberWithCommas } from '../Util/numberWithCommas';

export default function Products() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const {
		ProductsQuery: { error, data: products },
	} = useProducts();
	const navigate = useNavigate();

	return (
		<div>
			<img src={banner} alt="banner" />

			{error && <p className="flex justify-center py-3 text-lg text-white bg-red-300">로그인이 필요합니다.</p>}
			<div className="px-12">
				<CategoryBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
				{selectedCategory !== '' && (
					<ul className="grid lg:gap-1 xl:mx-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
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
				)}
			</div>
			<div className="px-12">
				{selectedCategory === '' ||
					(selectedCategory === null && (
						<ul className="grid lg:gap-1 xl:mx-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
							{products &&
								products.map(product => (
									<li key={product.id} className="p-3 overflow-hidden rounded-lg cursor-pointer">
										<p className="flex flex-col items-center justify-center">
											<img
												className="w-full mb-3 "
												src={product.url}
												alt="product_image"
												onClick={() => {
													navigate(`/products/${product.id}`, { state: { product } });
												}}
											/>
										</p>
										<div className="flex flex-col gap-y-1">
											<p className="text-xs font-light">{product.description}</p>
											<TitleLetter className="text-xl">{product.title}</TitleLetter>
											<p className="text-xs">{`${numberWithCommas(product.price)}`}</p>
										</div>
									</li>
								))}
						</ul>
					))}
			</div>
		</div>
	);
}
