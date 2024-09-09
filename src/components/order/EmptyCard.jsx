import Icon from '../icon/Icon';

function EmptyCard() {
	return (
		<div className="empty-card">
			<div className="f-none">
				<Icon id="illustration-empty-cart" w={128} h={128} />
			</div>
			<p className="c-rose-500 f-semi-bold">
				Your added items will appear here
			</p>
		</div>
	);
}

export default EmptyCard;
