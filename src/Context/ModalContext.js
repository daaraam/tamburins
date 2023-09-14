import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export default function ModalProvider({ children }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
}

export function useModal() {
	return useContext(ModalContext);
}
