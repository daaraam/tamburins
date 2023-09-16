import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { numberWithCommas } from '../Util/numberWithCommas';
import { TitleLetter } from './CartContents';

export default function PriceCard({ totalPrice, SHIPPING }) {
	const navigate = useNavigate();

	return (
		<div className="w-full mt-11">
			<TitleLetter>결제내역</TitleLetter>
			<Container>
				<List>
					<label>주문 금액</label>
					<Price>{numberWithCommas(totalPrice)}</Price>
				</List>
				<List>
					<label>배송비</label>
					<section className="flex items-center justify-end gap-x-5">
						<p className="text-xs ">3만원 이상 구매 시 무료배송</p>
						<Price>{numberWithCommas(SHIPPING)}</Price>
					</section>
				</List>
				<List>
					<label>총 금액</label>
					<Price>{numberWithCommas(totalPrice + SHIPPING)}</Price>
				</List>
			</Container>
			<CartButton onClick={() => alert('개발중입니다!')} className="text-white bg-black">
				주문 계속하기
			</CartButton>
			<CartButton onClick={() => navigate('/products')}>쇼핑 계속하기</CartButton>
			<div className="my-1 text-xs font-bold text-red-500 py-9">
				<p>주문일로부터 1-2 영업일 이내 출고됩니다.</p>
				<p>환경부 고시에 따라, 기본 쇼핑백이 제공되지 않습니다.</p>
			</div>
		</div>
	);
}

const List = styled.li`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #c1c0c0;
	padding: 1.5rem;
`;

const Container = styled.div`
	border-top: 3px solid black;
	margin-top: 2rem;
`;

const CartButton = styled.button`
	margin-top: 0.5rem;
	border: 1px solid black;
	width: 100%;
	padding: 0.5rem;
	&:hover {
		background: var(--color-brand);
		background: var(--color-grad);
		color: var(--color-white);
		border: 1px solid var(--color-white);
	}
`;

const Price = styled.p`
	font-weight: 700;
`;
