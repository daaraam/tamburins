import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './Context/AuthContext';

export default function RouteProtector({ children }) {
	const navigate = useNavigate();
	const { user } = useAuthContext();
	if (!user || !user.isAdmin) {
		return navigate('/');
	}
	return children;
}
