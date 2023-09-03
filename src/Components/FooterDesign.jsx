import React from 'react';
import styled from 'styled-components';

export default function FooterDesign() {
	return (
		<Container className=" p-20 mt-20">
			<Footer>
				<p>
					(주)탬버린즈 | 사업자등록번호: 111-86-30009 | 대표자: 최수지 | 서울특별시 마포구 어울마당로5길 41 |
					대표번호: 1644-1234 | 이메일: csxx@tamburins.com
				</p>
				<p>
					개인정보 보호 책임자: 최수지 | 호스팅 서비스 사업자: Netlify | 통신판매업신고: 제 2000-서울마포-1000
					호 (사업자정보확인) | 개인정보처리방침 | 이용약관
				</p>
				<br />
				<p>© 탬버린즈 대한민국</p>
			</Footer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--color-brand);
	background: var(--color-grad);
`;

const Footer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 0.8rem;
	color: var(--color-white);
	margin-bottom: 0;
`;
