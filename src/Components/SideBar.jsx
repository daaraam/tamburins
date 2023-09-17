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

	const handleClickInside = e => {
		toggleSide();
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	const handleClickOutside = e => {
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
			<div onClick={handleClickInside}>
				<Link to="/products">
					<GoProducts>제품 보기</GoProducts>
					{user && <Menu onClick={logOut}>로그아웃</Menu>}
					<Link to="/login">{!user && <Menu>로그인</Menu>}</Link>
					<Link to="/map">
						<Menu>매장보기</Menu>
					</Link>
					<Link to="/new">{user && user.isAdmin && <Menu>제품 등록하기</Menu>}</Link>
				</Link>
			</div>
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
