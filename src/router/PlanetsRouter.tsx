import { Route, Routes } from 'react-router-dom';
import { Menu } from '../components';
import { Earth, Home, Jupiter, Mars, Mercury, Neptune, Saturn, Uranus, Venus } from '../pages';

export const PlanetsRouter = () => {
	return (
		<div className='bg-stars p-5 text-White'>
			<Menu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/mercury' element={<Mercury />} />
				<Route path='/earth' element={<Earth />} />
				<Route path='/jupiter' element={<Jupiter />} />
				<Route path='/mars' element={<Mars />} />
				<Route path='/mercury' element={<Mercury />} />
				<Route path='/neptune' element={<Neptune />} />
				<Route path='/saturn' element={<Saturn />} />
				<Route path='/uranus' element={<Uranus />} />
				<Route path='/venus' element={<Venus />} />
			</Routes>
		</div>
	);
};
