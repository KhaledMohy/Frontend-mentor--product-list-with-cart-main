import { useContext } from 'react';
import ConfirmedOrder from '../order/ConfirmedOrder';
import { ModalContext } from '../../context/context';

function Modal() {
	const { toggleModal } = useContext(ModalContext);

	return (
		<div className="modal__wrapper" aria-modal="true">
			<div
				className="modal__overlay"
				role="button"
				aria-label="close modal"
				onClick={toggleModal}></div>
			<div className="modal">
				<ConfirmedOrder />
			</div>
		</div>
	);
}

export default Modal;
