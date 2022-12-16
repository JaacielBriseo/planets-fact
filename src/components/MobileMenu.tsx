import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app';

export const MobileMenu = () => {
	const { planets } = useAppSelector((state) => state.planets);

	return (
		<div className='text-White'>
			<ul>
				{planets.map((planet) => (
					<li key={planet.name}>
						<NavLink to={`/${planet.name.toLowerCase()}`}>{planet.name}</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};
