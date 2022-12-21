import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app';

export const PlanetsList = () => {
	const { planets } = useAppSelector((state) => state.planets);
	let activeStyle = {
		color: '#6F2ED6',
	};
	return (
		<ul
			className='hidden md:flex justify-evenly h-6 mt-7 font-Spartan text-xs font-bold tracking-wide border-b border-b-DarkGray uppercase
		lg:w-full lg:space-x-5 lg:border-none '
		>
			{planets.map(({ name }) => (
				<div key={name}>
					<NavLink
						to={`/${name.toLowerCase()}`}
						className='lg:text-xs lg:font-bold'
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						{name}
					</NavLink>
				</div>
			))}
		</ul>
	);
};
