import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProducts, getProducts } from '../API/firebase';

export default function useProducts() {
	const queryClient = useQueryClient();

	const ProductsQuery = useQuery(['products'], getProducts, {
		staleTime: 1000 * 60,
	});

	const addProduct = useMutation(({ product, url }) => addNewProducts(product, url), {
		onSuccess: () => queryClient.invalidateQueries(['products']),
	});

	return { ProductsQuery, addProduct };
}
