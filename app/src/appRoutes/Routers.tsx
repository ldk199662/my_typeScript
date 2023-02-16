import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Random from '../components/Random';
import Room from '../components/Room';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="/room" element={<Room />} />
					<Route path="/home" element={<Home />} />
					<Route path="/random" element={<Random />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
