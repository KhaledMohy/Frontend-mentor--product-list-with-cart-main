import { memo, useContext, useEffect, useRef, useState } from 'react';
import { CartDispathchContext } from '../../context/cartContext';
import Icon from '../icon/Icon';
import gallery from '../../utils/gallery';
import BtnIcon from '../buttons/BtnIcon';
import ImgSkeleton from '../others/ImgSkeleton';

const DeleteOrder = memo(({ id }) => {
	const dispatch = useContext(CartDispathchContext);
	return (
		<BtnIcon
			label="remove this order"
			clickHandler={() => {
				dispatch({
					type: 'delete',
					payload: { id },
				});
			}}>
			<Icon className="f-rose-300" id="remove" w={10} h={10} />
		</BtnIcon>
	);
});

const OrderImage = memo(({ img }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef(null);

	const loadHandler = () => setIsLoaded(true);

	useEffect(() => {
		if (imgRef.current && imgRef.current.complete) setIsLoaded(true);
	}, []);

	return (
		<div className="order__thumbnail f-none">
			<img
				className="img"
				src={gallery[img]}
				alt="dessert"
				onLoad={loadHandler}
				loading="lazy"
			/>
			<ImgSkeleton isDisplayed={isLoaded} />
		</div>
	);
});

function OrderItem({ type, data }) {
	const { name, img, unitPrice, totalPrice, quantity, id } = data;
	return (
		<li className="order__item">
			<div className="flex align-center gc-sm ">
				{type === 'confirm' && <OrderImage img={img} />}

				<div>
					<h3 className="mb-sm f-semi-bold one-line">{name}</h3>
					<div className="flex align-center gc-xl">
						<p className="c-red f-semi-bold">
							<data value={quantity}>{quantity}</data>x
						</p>
						<div className="flex align-center gc-md">
							<p className="c-rose-400 f-semi-bold">
								@ $
								<data className="" value={5.5} aria-label="unit price">
									{unitPrice}
								</data>
							</p>

							{type === 'cart' && (
								<p className="c-rose-500 f-semi-bold">
									$
									<data
										className=""
										value={totalPrice}
										aria-label="total price">
										{totalPrice}
									</data>
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
			<div>
				{type === 'cart' && <DeleteOrder id={id} />}

				{type === 'confirm' && (
					<p className="c-rose-500 f-semi-bold">
						$
						<data className="" value={totalPrice} aria-label="total price">
							{totalPrice}
						</data>
					</p>
				)}
			</div>
		</li>
	);
}

export default OrderItem;
