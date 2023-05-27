import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routers from './routers/router';
import { StoreProvider } from './context/Store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
	return (
		<StoreProvider>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<RouterProvider router={Routers}></RouterProvider>
			</LocalizationProvider>
		</StoreProvider>
	);
}

export default App;
