import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Room from '../components/Room';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />}>
                <Route path="/room" element={<Room />} />

                </Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
