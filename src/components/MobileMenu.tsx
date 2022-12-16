import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app';
import chevron from '../assets/icon-chevron.svg';

export const MobileMenu = () => {
	const { planets } = useAppSelector((state) => state.planets);

	return (
		<div className='w-80 h-[487px] p-2 fixed top-16 left-6 z-50 bg-Semiblack'>
			<ul className='divide-y divide-DarkGray text-White uppercase font-Spartan tracking-wider'>
				{planets.map((planet) => (
					<li key={planet.name} className='flex items-center justify-between space-y-14'>
						<div className='w-[136px] h-6 flex items-center space-x-4'>
							<span className={`inline-block w-5 h-5 rounded-full bg-${planet.name}`}></span>
							<NavLink to={`/${planet.name.toLowerCase()}`}>{planet.name}</NavLink>
						</div>
						<img src={chevron} alt='Chevron' />
					</li>
				))}
			</ul>
		</div>
	);
};
