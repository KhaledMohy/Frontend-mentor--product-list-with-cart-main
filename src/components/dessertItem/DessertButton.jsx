import { memo, useContext } from 'react';
import Icon from '../icon/Icon';
import BtnIcon from '../buttons/BtnIcon';
import { CartContext, CartDispathchContext } from '../../context/cartContext';

const BtnAddOne = ({ add }) => {
	return (
		<button type="button" className="btn-add-to-cart" onClick={add}>
			<span className="f-none">
				<Icon id="add-to-cart" w={21} h={20} />
			</span>
			<span className="f-semi-bold">Add to Cart</span>
		</button>
	);
};

const BtnControlOrder = ({ add, remove, counter }) => {
	return (
		<div className="btn-cont-to-cart">
			<BtnIcon
				className="btn-icon has-state"
				label="decrement one"
				clickHandler={remove}>
				<Icon className="f-white" id="minus" w={10} h={2} />
			</BtnIcon>

			<data
				className="c-rose-50 f-text-lg f-semi-bold text-center"
				value={counter}
				style={{ width: '38px' }}
				aria-live="polite">
				{counter}
			</data>

			<BtnIcon
				className="btn-icon has-state"
				label="increment one"
				clickHandler={add}>
				<Icon className="f-white" id="plus" w={10} h={10} />
			</BtnIcon>
		</div>
	);
};

function DessertButton({ id }) {
	const { orders } = useContext(CartContext);
	const dispatch = useContext(CartDispathchContext);
	const order = orders.find(item => id === item.id);
	let content;

	const addHandler = () => dispatch({ type: 'add', payload: { id } });
	const removeHandler = () => dispatch({ type: 'remove', payload: { id } });

	if (order === undefined) {
		content = <BtnAddOne add={addHandler} />;
	} else {
		content = (
			<BtnControlOrder
				counter={order.quantity}
				remove={removeHandler}
				add={addHandler}
			/>
		);
	}

	return <div className="dessert__button-wrapper">{content}</div>;
}

export default memo(DessertButton);
