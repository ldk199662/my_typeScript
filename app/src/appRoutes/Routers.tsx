import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import List from '../components/LIst';
import Player from '../components/Player';
import Random from '../components/Random';
import Recomment from '../components/Recomment';
import Room from '../components/Room';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="/room" element={<Room />} />
					<Route path="/home" element={<Home />} />
					<Route path="/random" element={<Random />} />
					<Route path="/list" element={<List />} />
					<Route path="/recomment" element={<Recomment />} />
					<Route path="/player" element={<Player />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
