import Thumbnail from './Thumbnail';
import DessertButton from './DessertButton';
import DessertContent from './DessertContent';

function DessertItem({ data }) {
	const { image, name, category, price, id } = data;

	return (
		<div className="dessert__item">
			<div>
				<Thumbnail src={image} />
				<DessertButton id={id} />
				<DessertContent name={name} category={category} price={price} />
			</div>
		</div>
	);
}

export default DessertItem;
