import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, getCart, removeFromCart } from '../API/firebase';
import { useAuthContext } from '../Context/AuthContext';

export default function useCarts() {
	const { uid } = useAuthContext();
	const queryClient = useQueryClient();

	// carts인데 현재 사용자(uid)별로 캐시가 이루어지도록 uid를 설정. 로그인을 안하면=uid가 없는(null)경우 쿼리가 수행되지 않도록 enable을 설정해뒀다.
	const CartsQuery = useQuery(['carts', uid || ''], () => getCart(uid), { enable: !!uid });

	const addOrUpdateItem = useMutation(product => addOrUpdateToCart(uid, product), {
		onSuccess: () => {
			queryClient.invalidateQueries(['carts', uid]);
		},
	});

	const removeItem = useMutation(id => removeFromCart(uid, id), {
		onSuccess: () => {
			queryClient.invalidateQueries(['carts', uid]);
		},
	});

	return { CartsQuery, addOrUpdateItem, removeItem };
}
