import { useCallback, useEffect, useRef, useState } from 'react';
import gallery from '../../utils/gallery';
import ImgSkeleton from '../others/ImgSkeleton';

function Thumbnail({ src }) {
	const { thumbnail, mobile, tablet, desktop } = src;
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef(null);
	const loadHandler = useCallback(() => setIsLoaded(true), []);

	useEffect(() => {
		if (imgRef.current && imgRef.current.complete) loadHandler();
	}, [loadHandler]);

	return (
		<div className="dessert__thumbnail f-none">
			<img
				className="img"
				src={gallery[thumbnail]}
				srcSet={`
          ${gallery[mobile]} 480w, 
          ${gallery[tablet]} 768w, 
          ${gallery[desktop]} 1028w
        `}
				sizes="(max-width: 480px) 480px,
               (max-width: 768px) 768px,
               1028px"
				alt={thumbnail}
				loading="lazy"
				onLoad={loadHandler}
				ref={imgRef}
			/>
			<ImgSkeleton isDisplayed={isLoaded} />
		</div>
	);
}

export default Thumbnail;
