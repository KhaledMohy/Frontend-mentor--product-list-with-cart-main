import React from 'react';

function TotalPrice({ totalPrice }) {
	return (
		<div className="total-price">
			<div className="flex align-center justify-between flex-wrap gc-md gr-sm">
				<p className="c-rose-500 f-semi-bold">Order Total</p>
				<p className="c-rose-900 f-display-lg f-bold">
					$<data value={totalPrice}>{totalPrice}</data>
				</p>
			</div>
		</div>
	);
}

export default TotalPrice;
