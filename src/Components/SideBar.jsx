import React, { useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../Context/AuthContext';

export default function SideBar({ isOpen, setIsOpen }) {
	const { user, logOut } = useAuthContext();
	const toggleSide = () => {
		setIsOpen(false);
	};
	useEffect(() => {
		document.addEventListener('mousedown', handlerOut);

		return () => {
			document.removeEventListener('mousedown', handlerOut);
		};
	});

	const handlerOut = e => {
		if (!outside.current.contains(e.target)) {
			toggleSide();
		}
	};
	const outside = useRef();
	return (
		<SideBarWrap id="sidebar" ref={outside} className={isOpen ? 'open' : ''}>
			<AiOutlineClose
				size={20}
				onClick={toggleSide}
				onKeyDown={toggleSide}
				className="absolute w-full left-24 "
			/>
			<Link to="/products">
				<GoProducts>제품 보기</GoProducts>
				{user && <Menu onClick={logOut}>로그아웃</Menu>}
				<Link to="/login">{!user && <Menu>로그인</Menu>}</Link>
				<Link to="/map">
					<Menu>매장보기</Menu>
				</Link>
			</Link>
		</SideBarWrap>
	);
}

const SideBarWrap = styled.div`
	z-index: 5;
	background: var(--color-grad);
	height: 100%;
	width: 75%;
	right: -75%;
	top: 0;
	position: fixed;
	transition: 0.5s ease;
	padding: 80px 30px 80px;

	&.open {
		right: 0;
		transition: 0.5s ease;
	}
`;

const GoProducts = styled.p`
	margin: 30px 8px;
	font-size: 1.5rem;
`;

const Menu = styled.p`
	margin: 20px 8px;
	font-size: 1rem;
`;
