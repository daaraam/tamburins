import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, getCart as fetchCarts } from '../API/firebase';

export default function useCarts() {
	const queryClient = useQueryClient();

	const getCart = useQuery(['carts'], fetchCarts);

	const addCart = useMutation(({ uid }) => addOrUpdateToCart(uid), {
		onSuccess: () => queryClient.invalidateQueries(['carts']),
	});

	return { getCart, addCart };
}
