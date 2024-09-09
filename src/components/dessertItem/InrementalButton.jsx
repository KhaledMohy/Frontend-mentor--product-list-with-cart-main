import React, { memo } from 'react';
import BtnIcon from '../buttons/BtnIcon';
import Icon from '../icon/Icon';
let n = 0;
function InrementalButton({ onHandler }) {
	// console.log(++n);
	return (
		<BtnIcon
			className="btn-icon has-state"
			label="increment one"
			clickHandler={() => onHandler()}>
			<Icon className="f-white" id="plus" w={10} h={10} />
		</BtnIcon>
	);
}

export default memo(InrementalButton);
