import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './context/context.jsx';
import { CartProvider } from './context/cartContext.jsx';
import App from './App.jsx';
import './css/style.css';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ModalProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ModalProvider>
	</StrictMode>
);
