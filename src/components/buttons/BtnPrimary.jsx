import React from 'react';

function BtnPrimary({ className, children, clickHandler }) {
	return (
		<button type="button" className="btn-primary" onClick={clickHandler}>
			{children}
		</button>
	);
}

export default BtnPrimary;
