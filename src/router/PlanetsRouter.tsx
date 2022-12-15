import { Route, Routes } from 'react-router-dom';
import { Earth, Jupiter, Mars, Menu, Mercury, Neptune, Saturn, Uranus, Venus } from '../pages';

export const PlanetsRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/earth' element={<Earth />} />
				<Route path='/jupiter' element={<Jupiter />} />
				<Route path='/mars' element={<Mars />} />
				<Route path='/mercury' element={<Mercury />} />
				<Route path='/neptune' element={<Neptune />} />
				<Route path='/saturn' element={<Saturn />} />
				<Route path='/uranus' element={<Uranus />} />
				<Route path='/venus' element={<Venus />} />
			</Routes>
		</>
	);
};
