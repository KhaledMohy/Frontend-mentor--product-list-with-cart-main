import { memo } from 'react';
import data from '../../data/data.json';
import DessertItem from '../dessertItem/DessertItem';

function Feed() {
	return (
		<main className="feed">
			<div className="mb-2xl">
				<h1 className="f-heading-1 f-bold">Desserts</h1>
			</div>
			<div className="feed__list">
				{data.map(obj => (
					<DessertItem key={obj.id} data={obj} />
				))}
			</div>
		</main>
	);
}

export default memo(Feed);
