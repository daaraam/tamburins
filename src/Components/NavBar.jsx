import React from 'react';
import { BsFillBoxSeamFill, BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useAuthContext } from '../Context/AuthContext';
import logo from '../Image/logo-2.png';

export default function NavBar() {
	const { user, logOut } = useAuthContext();

	return (
		<Header className="flex justify-between pl-7 items-center pr-7">
			<nav className="flex gap-x-5">
				<Link to="/">
					<Img src={logo} alt="logo" />
				</Link>
				<Link to="/products">
					<h3>제품 보기</h3>
				</Link>
			</nav>
			<nav className="flex gap-x-5 items-center">
				<Link to="/login">
					{user && <p onClick={logOut}>로그아웃</p>}
					{!user && <p>로그인</p>}
				</Link>
				<BsFillBoxSeamFill size={20} cursor="pointer" />
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
