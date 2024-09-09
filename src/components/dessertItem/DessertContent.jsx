function DessertContent({ price, category, name }) {
	return (
		<div className="flex flex-column gr-ex-sm">
			<span className="f-label c-rose-500 ">{category}</span>
			<h2 className="f-semi-bold one-line">{name}</h2>
			<data className="c-red f-text-lg f-semi-bold" value={price}>
				${price.toFixed(2)}
			</data>
		</div>
	);
}

export default DessertContent;
