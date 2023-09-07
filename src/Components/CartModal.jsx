import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import CartStatus from './CartStatus';
import './ModalCSS.css';

export default function CartModal() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const modalOpen = () => {
		setModalIsOpen(true);
	};
	const modalClose = () => {
		setModalIsOpen(false);
	};
	const navigate = useNavigate();
	return (
		<div>
			<CartStatus modalOpen={modalOpen} />
			<Modal className={Modal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
				<form className="modalBody">
					<button id="modalCloseBtn" onClick={modalClose}>
						<GrFormClose />
					</button>
					<p>내용</p>
					<button
						onClick={e => {
							e.preventDefault();
							navigate('/cart');
							modalClose();
						}}
					>
						Go Cart
					</button>
				</form>
			</Modal>
		</div>
	);
}
