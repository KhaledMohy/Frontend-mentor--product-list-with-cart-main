import React, { memo } from 'react';

function BtnIcon({ label, clickHandler, className, children }) {
	return (
		<button
			type="button"
			className={`btn-icon${className ? ' ' + className : ''}`}
			aria-label={label}
			onClick={clickHandler}>
			{children}
		</button>
	);
}

export default memo(BtnIcon);
