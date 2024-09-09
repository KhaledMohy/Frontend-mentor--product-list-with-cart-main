import React, { memo } from 'react';
import icons from '../../assets/icons/icons.svg';

function Icon({ id, w = 24, h = 24, className }) {
	return (
		<svg
			className={`icon${className ? ' ' + className : ''}`}
			width={w}
			height={h}
			viewBox={`0 0 ${w} ${h}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<use href={`${icons}#${id}`}></use>
		</svg>
	);
}

export default memo(Icon);
