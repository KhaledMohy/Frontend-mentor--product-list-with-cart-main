import React, { useContext } from 'react';
import OrderItem from './OrderItem';
import { CartContext } from '../../context/cartContext';

function Order({ type }) {
	const { totalPrice, orders } = useContext(CartContext);
	return (
		<div className="orders__wrapper">
			<ul className="cart__list">
				{orders.map(order => (
					<OrderItem key={order.id} data={order} type={type} />
				))}
			</ul>
			<div className="total-price">
				<div className="flex align-center justify-between flex-wrap gc-md gr-sm">
					<p className="c-rose-500 f-semi-bold">Order Total</p>
					<p className="c-rose-900 f-display-lg f-bold">
						$<data value={totalPrice}>{totalPrice}</data>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Order;
