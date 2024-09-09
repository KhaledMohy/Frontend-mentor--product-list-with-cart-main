import { createContext, useReducer } from 'react';
import data from '../data/data.json';
export const CartContext = createContext(null); // for read cart
export const CartDispathchContext = createContext(null); // for add operations to the cart

const initialCart = {
	totalPrice: 0,
	totalOrder: 0,
	orders: [],
};

const cartReducer = function (cart, action) {
	switch (action.type) {
		case 'add': {
			const { orders } = cart;
			const { id } = action.payload;
			const orderInCart = orders.find(order => id === order.id);
			const orderInDB = data.find(item => id === item.id);

			let updatedOrders;
			if (!orderInCart) {
				// Add new item to the cart
				updatedOrders = [
					...orders,
					{
						id,
						name: orderInDB.name,
						img: orderInDB.image.thumbnail,
						unitPrice: orderInDB.price,
						totalPrice: orderInDB.price,
						quantity: 1,
					},
				];
			} else {
				// Update existing item's quantity and total price
				updatedOrders = orders.map(item =>
					id === item.id
						? {
								...item,
								totalPrice: item.totalPrice + item.unitPrice,
								quantity: item.quantity + 1,
						  }
						: item
				);
			}

			const updatedTotalPrice = cart.totalPrice + orderInDB.price;
			const updatedTotalOrder = cart.totalOrder + 1;

			return {
				totalPrice: updatedTotalPrice,
				totalOrder: updatedTotalOrder,
				orders: updatedOrders,
			};
		}

		case 'remove': {
			const { orders } = cart;
			const { id } = action.payload;
			const orderInCart = orders.find(item => id === item.id);

			if (!orderInCart) return cart;

			if (orderInCart.quantity === 1) {
				// Remove item completely if quantity is 1
				const updatedOrders = orders.filter(order => id !== order.id);
				const updatedTotalPrice = cart.totalPrice - orderInCart.unitPrice;
				const updatedTotalOrder = cart.totalOrder - 1;

				return {
					totalPrice: updatedTotalPrice,
					totalOrder: updatedTotalOrder,
					orders: updatedOrders,
				};
			}

			// Decrease item quantity and total price
			const updatedOrders = orders.map(item =>
				id === item.id
					? {
							...item,
							totalPrice: item.totalPrice - item.unitPrice,
							quantity: item.quantity - 1,
					  }
					: item
			);

			const updatedTotalPrice = cart.totalPrice - orderInCart.unitPrice;
			const updatedTotalOrder = cart.totalOrder - 1;

			return {
				totalPrice: updatedTotalPrice,
				totalOrder: updatedTotalOrder,
				orders: updatedOrders,
			};
		}

		case 'delete': {
			const { orders } = cart;
			const { id } = action.payload;
			const orderInCart = orders.find(item => id === item.id);

			if (!orderInCart) return cart;

			const updatedOrders = orders.filter(item => item.id !== id);
			const updatedTotalPrice =
				cart.totalPrice - orderInCart.unitPrice * orderInCart.quantity;
			const updatedTotalOrder = cart.totalOrder - orderInCart.quantity;

			return {
				totalPrice: updatedTotalPrice,
				totalOrder: updatedTotalOrder,
				orders: updatedOrders,
			};
		}

		case 'reset': {
			return {
				totalPrice: 0,
				totalOrder: 0,
				orders: [],
			};
		}

		default:
			return cart;
	}
};

export const CartProvider = ({ children }) => {
	const [cart, cartDispatch] = useReducer(cartReducer, initialCart);
	return (
		<CartContext.Provider value={cart}>
			<CartDispathchContext.Provider value={cartDispatch}>
				{children}
			</CartDispathchContext.Provider>
		</CartContext.Provider>
	);
};
