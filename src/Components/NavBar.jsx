import React from 'react';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '../Image/logo-2.png';

export default function NavBar() {
	return (
		<Header className="flex justify-between pl-7 items-center pr-7">
			<nav className="flex gap-x-5">
				<Link to="/">
					<Img src={logo} alt="logo" />
				</Link>
				<Link to="/shop">
					<h3>제품 보기</h3>
				</Link>
			</nav>
			<nav className="flex gap-x-5 items-center">
				<Link to="/account">
					<h3>마이 페이지</h3>
				</Link>
				<Link to="/login">
					<h3>로그인</h3>
				</Link>
				<BsFillBoxSeamFill />
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
