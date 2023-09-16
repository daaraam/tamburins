import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useAuthContext } from '../Context/AuthContext';
import logo from '../Image/logo-2.png';
import CartStatus from './CartStatus';

export default function NavBar() {
	const { user, logOut } = useAuthContext();
	const navigate = useNavigate();
	return (
		<Header className="flex items-center justify-between px-3 mx-5">
			<nav className="flex gap-x-5">
				<Link to="/">
					<Img src={logo} alt="logo" />
				</Link>
				<Link to="/products">
					<h3>제품 보기</h3>
				</Link>
			</nav>
			<nav className="flex items-center gap-x-5">
				<Link to="/login">
					{user && <p onClick={logOut}>로그아웃</p>}
					{!user && <p>로그인</p>}
				</Link>
				<CartStatus
					onClick={e => {
						e.preventDefault();
						navigate('/cart');
					}}
				/>
				<Link to="/new">{user && user.isAdmin && <BsPencilSquare size={20} cursor="pointer" />}</Link>
			</nav>
		</Header>
	);
}

const Header = styled.header`
	height: 7rem;
	font-size: 1rem;
`;
const Img = styled.img`
	width: 11rem;
	height: 1.5rem;
`;
