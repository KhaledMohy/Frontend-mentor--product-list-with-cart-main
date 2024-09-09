import { useContext } from 'react';
import { ModalContext } from './context/context';
import Feed from './components/sections/Feed';
import Cart from './components/sections/Cart';
import Modal from './components/sections/Modal';

function App() {
	const { isModalOpened } = useContext(ModalContext);
	return (
		<div className="app">
			<div className="app__container">
				<div className="app__box">
					<Feed />
					<Cart />
					{isModalOpened && <Modal />}
				</div>
			</div>
		</div>
	);
}

export default App;
