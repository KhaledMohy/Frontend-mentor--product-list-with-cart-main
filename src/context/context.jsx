import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = function ({ children }) {
	const [isModalOpened, setIsModalOpened] = useState(false);

	const toggleModal = () => {
		setIsModalOpened(prev => !prev);
	};

	return (
		<ModalContext.Provider value={{ isModalOpened, toggleModal }}>
			{children}
		</ModalContext.Provider>
	);
};
