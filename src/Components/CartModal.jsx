import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Components/Button';
import { useModal } from '../Context/ModalContext';
import { IsMobile } from '../Responsive';
import './ModalCSS.css';

export default function CartModal({ title, url, cartHandler }) {
	const navigate = useNavigate();
	const { closeModal, modalIsOpen } = useModal();
	const isPhone = IsMobile();
	return (
		<div>
			<Button
				text={'Add to cart'}
				className={isPhone ? 'w-72 my-10 text-white bg-black' : 'w-96 mt-10 text-white bg-black '}
				onClick={cartHandler}
			/>
			<Modal className={Modal} isOpen={modalIsOpen} onRequestClose={closeModal}>
				<form className="modalBody">
					<button id="modalCloseBtn" onClick={closeModal}>
						<GrFormClose />
					</button>
					<p className="w-full p-3 bg-white">
						<img src={url} alt="cartImg2" />
						{title}
					</p>

					<CartButton
						onClick={e => {
							e.preventDefault();
							navigate('/cart');
							closeModal();
						}}
					>
						Go Cart
					</CartButton>
				</form>
			</Modal>
		</div>
	);
}

const CartButton = styled.button`
	padding: 0.5rem;
	width: 100%;
	padding: 0.75rem;
	background-color: black;
	color: white;
	&:hover {
		background: var(--color-brand);
		background: var(--color-grad);
		color: var(--color-white);
		border: 1px solid var(--color-white);
	}
`;
