import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useAuthContext } from '../Context/AuthContext';
import logo from '../Image/logo-2.png';
import { IsMobile } from '../Responsive';
import CartStatus from './CartStatus';
import SideBar from './SideBar';

export default function NavBar() {
	const { user, logOut } = useAuthContext();
	const navigate = useNavigate();
	const isPhone = IsMobile();
	const [isOpen, setIsOpen] = useState(false);
	const toggleSide = () => {
		setIsOpen(true);
	};
	return (
		<>
			{isPhone ? (
				<Header className="flex items-center justify-between px-3 mx-3">
					<Link to="/">
						<MobileImg src={logo} alt="logo" />
					</Link>
					<div className="flex gap-x-4">
						{user && (
							<CartStatus
								onClick={e => {
									e.preventDefault();
									navigate('/cart');
								}}
							/>
						)}
						<AiOutlineMenu onClick={toggleSide} />
						<SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
				</Header>
			) : (
				<Header className="flex items-center justify-between px-3 mx-5">
					<nav className="flex gap-x-5">
						<Link to="/">
							<Img src={logo} alt="logo" />
						</Link>
						<Link to="/products">
							<h3>제품 보기</h3>
						</Link>
						<Link to="/map">
							<h3>매장 보기</h3>
						</Link>
					</nav>
					<nav className="flex items-center gap-x-5">
						{user && <p onClick={logOut}>로그아웃</p>}
						<Link to="/login">{!user && <p>로그인</p>}</Link>
						{user && (
							<CartStatus
								onClick={e => {
									e.preventDefault();
									navigate('/cart');
								}}
							/>
						)}
						<Link to="/new">{user && user.isAdmin && <BsPencilSquare size={20} cursor="pointer" />}</Link>
					</nav>
				</Header>
			)}
		</>
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
const MobileImg = styled.img`
	width: 9rem;
`;
