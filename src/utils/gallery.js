import baklavaThumbnail from '../assets/images/image-baklava-thumbnail.jpg';
import baklavaMobile from '../assets/images/image-baklava-mobile.jpg';
import baklavaDesktop from '../assets/images/image-baklava-desktop.jpg';
import baklavaTablet from '../assets/images/image-baklava-tablet.jpg';

import brownieThumbnail from '../assets/images/image-brownie-thumbnail.jpg';
import brownieMobile from '../assets/images/image-brownie-mobile.jpg';
import brownieDesktop from '../assets/images/image-brownie-desktop.jpg';
import brownieTablet from '../assets/images/image-brownie-tablet.jpg';

import cakeThumbnail from '../assets/images/image-cake-thumbnail.jpg';
import cakeMobile from '../assets/images/image-cake-mobile.jpg';
import cakeDesktop from '../assets/images/image-cake-desktop.jpg';
import cakeTablet from '../assets/images/image-cake-tablet.jpg';

import cremeBruleeThumbnail from '../assets/images/image-creme-brulee-thumbnail.jpg';
import cremeBruleeMobile from '../assets/images/image-creme-brulee-mobile.jpg';
import cremeBruleeDesktop from '../assets/images/image-creme-brulee-desktop.jpg';
import cremeBruleeTablet from '../assets/images/image-creme-brulee-tablet.jpg';

import macaronThumbnail from '../assets/images/image-macaron-thumbnail.jpg';
import macaronMobile from '../assets/images/image-macaron-mobile.jpg';
import macaronDesktop from '../assets/images/image-macaron-desktop.jpg';
import macaronTablet from '../assets/images/image-macaron-tablet.jpg';

import meringueThumbnail from '../assets/images/image-meringue-thumbnail.jpg';
import meringueMobile from '../assets/images/image-meringue-mobile.jpg';
import meringueDesktop from '../assets/images/image-meringue-desktop.jpg';
import meringueTablet from '../assets/images/image-meringue-tablet.jpg';

import pannaCottaThumbnail from '../assets/images/image-panna-cotta-thumbnail.jpg';
import pannaCottaMobile from '../assets/images/image-panna-cotta-mobile.jpg';
import pannaCottaDesktop from '../assets/images/image-panna-cotta-desktop.jpg';
import pannaCottaTablet from '../assets/images/image-panna-cotta-tablet.jpg';

import tiramisuThumbnail from '../assets/images/image-tiramisu-thumbnail.jpg';
import tiramisuMobile from '../assets/images/image-tiramisu-mobile.jpg';
import tiramisuDesktop from '../assets/images/image-tiramisu-desktop.jpg';
import tiramisuTablet from '../assets/images/image-tiramisu-tablet.jpg';

import waffleThumbnail from '../assets/images/image-waffle-thumbnail.jpg';
import waffleMobile from '../assets/images/image-waffle-mobile.jpg';
import waffleDesktop from '../assets/images/image-waffle-desktop.jpg';
import waffleTablet from '../assets/images/image-waffle-tablet.jpg';

const images = import.meta.glob('../assets/images/*.jpg');

// const gallery = {};

// // Helper function to extract image key
// const getKeyFromPath = path => {
// 	const fileName = path.split('/').pop(); // Extract the file name (e.g., image-baklava-thumbnail.jpg)
// 	return fileName.slice(6, -4); // Strip 'image-' and file extension
// };

// for (const path in images) {
// 	const p = new URL(path, import.meta.url).href;
// 	const key = getKeyFromPath(path);
// 	gallery[key] = p;
// }

const gallery = {
	baklavaDesktop,
	baklavaMobile,
	baklavaTablet,
	baklavaThumbnail,
	brownieDesktop,
	brownieMobile,
	brownieTablet,
	brownieThumbnail,
	cakeDesktop,
	cakeMobile,
	cakeTablet,
	cakeThumbnail,
	cremeBruleeDesktop,
	cremeBruleeMobile,
	cremeBruleeTablet,
	cremeBruleeThumbnail,
	macaronDesktop,
	macaronMobile,
	macaronTablet,
	macaronThumbnail,
	meringueDesktop,
	meringueMobile,
	meringueTablet,
	meringueThumbnail,
	pannaCottaDesktop,
	pannaCottaMobile,
	pannaCottaTablet,
	pannaCottaThumbnail,
	tiramisuThumbnail,
	tiramisuMobile,
	tiramisuTablet,
	tiramisuDesktop,
	waffleDesktop,
	waffleMobile,
	waffleTablet,
	waffleThumbnail,
};

export default gallery;
