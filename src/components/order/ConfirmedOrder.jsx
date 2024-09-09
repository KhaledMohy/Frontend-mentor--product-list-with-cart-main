import { useContext } from 'react';
import { ModalContext } from '../../context/context';
import { CartDispathchContext } from '../../context/cartContext';
import Card from '../card/Card';
import BtnPrimary from '../buttons/BtnPrimary';
import Icon from '../icon/Icon';
import Order from '../order/Order';

function ConfirmedOrder() {
	const { toggleModal } = useContext(ModalContext);
	const dispatch = useContext(CartDispathchContext);

	const confirmHandler = () => {
		toggleModal();
		dispatch({ type: 'reset' });
	};

	return (
		<Card>
			<div className="f-none">
				<Icon id="order-confirmed" w={48} h={48} />
			</div>
			<div>
				<h1 className="f-heading-1 f-bold">Order Confirmed</h1>
				<p>We hope you enjoy your food!</p>
			</div>
			<Order type="confirm" />

			<BtnPrimary clickHandler={confirmHandler}>Start New Order</BtnPrimary>
		</Card>
	);
}

export default ConfirmedOrder;
