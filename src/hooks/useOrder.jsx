import { useContext, useCallback } from 'react';
import { CartContex } from '../context/cartContext';

// Custom hook to get specific order for a dessert by ID
export const useOrder = id => {
	const { orders, addOrder, removeOrder } = useContext(CartContex);

	const order = orders.find(order => order.id === id) || { counter: 0, id };

	const addOrderForItem = useCallback(() => addOrder(id), [addOrder, id]);
	const removeOrderForItem = useCallback(
		() => removeOrder(id),
		[removeOrder, id]
	);

	return {
		order,
		addOrderForItem,
		removeOrderForItem,
	};
};
