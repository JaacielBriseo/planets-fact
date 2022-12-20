import { NavLink } from 'react-router-dom';
import { toggleMobileMenu, useAppSelector, useAppDispatch } from '../app';


export const MobileMenu = () => {
	const { planets } = useAppSelector((state) => state.planets);
	const dispatch = useAppDispatch();
	return (
		<div className='w-screen h-[487px] p-2 fixed top-16 left-0 z-50 bg-Semiblack'>
			<ul className='divide-y divide-DarkGray text-White uppercase font-Spartan tracking-wider'>
				{planets.map((planet) => (
					<li key={planet.name} className='flex items-center justify-between space-y-14 bg-Semiblack px-2'>
						<div className='w-[136px] h-6 flex items-center space-x-4'>
							<span className={`w-5 h-5 rounded-full bg-${planet.name}`}></span>
							<NavLink to={`/${planet.name.toLowerCase()}`} onClick={() => dispatch(toggleMobileMenu())}>
								{planet.name}
							</NavLink>
						</div>
						<img src='./assets/icon-chevron.svg' alt='Chevron' />
					</li>
				))}
			</ul>
		</div>
	);
};
