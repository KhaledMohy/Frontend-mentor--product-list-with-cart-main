function ImgSkeleton({ isDisplayed }) {
	return (
		<div
			className={isDisplayed ? 'layer-fadeout feed-out' : 'layer-fadeout'}
			aria-hidden="true"></div>
	);
}

export default ImgSkeleton;
