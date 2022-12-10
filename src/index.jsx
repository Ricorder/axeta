import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import AppContextProvider from './contexts/appContext';

const root = createRoot(
	document.getElementById('root')
);
root.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>
);
