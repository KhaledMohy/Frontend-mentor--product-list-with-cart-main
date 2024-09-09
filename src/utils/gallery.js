const images = import.meta.glob('../assets/images/*.jpg');

const gallery = {};

// Helper function to extract image key
const getKeyFromPath = path => {
	const fileName = path.split('/').pop(); // Extract the file name (e.g., image-waffle-thumbnail.jpg)
	return fileName.slice(6, -4); // Strip 'image-' and file extension
};

for (const path in images) {
	const p = new URL(path, import.meta.url).href;
	const key = getKeyFromPath(path);
	gallery[key] = p;
}

export default gallery;
