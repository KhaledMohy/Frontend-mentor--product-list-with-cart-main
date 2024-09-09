import React, { memo, useContext } from 'react';
import { ModalContext } from '../../context/context';
import { CartContext } from '../../context/cartContext';
import Order from '../order/Order';
import EmptyCard from '../order/EmptyCard';
import Card from '../card/Card';
import BtnPrimary from '../buttons/BtnPrimary';
import Icon from '../icon/Icon';

function Cart() {
	const { totalOrder } = useContext(CartContext);
	const { toggleModal } = useContext(ModalContext);

	return (
		<section className="cart">
			<div className="cart__container">
				<Card>
					<h2 className="c-red">
						<span>Your Cart</span>(<data value={totalOrder}>{totalOrder}</data>)
					</h2>

					{totalOrder !== 0 && (
						<>
							<Order type="cart" />

							<div className="carbon-tag">
								<span>
									<Icon id="carbon" w={21} h={20} />
								</span>
								<span>
									This is a <strong>carbon-netural</strong> delivery
								</span>
							</div>
							<div>
								<BtnPrimary clickHandler={toggleModal}>
									Confirm Order
								</BtnPrimary>
							</div>
						</>
					)}

					{totalOrder === 0 && <EmptyCard />}
				</Card>
			</div>
		</section>
	);
}

export default memo(Cart);
