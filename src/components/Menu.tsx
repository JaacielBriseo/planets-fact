import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app';
import { Header, MobileMenu } from '.';

export const Menu = () => {
	const { isMobileMenuOpen, planets } = useAppSelector((state) => state.planets);

	return (
		<>
			<Header />
			{isMobileMenuOpen && <MobileMenu />}
			<ul className='hidden md:flex justify-evenly h-6 mt-7 font-Spartan text-xs font-bold tracking-wide border-b border-b-DarkGray uppercase'>
				{planets.map(({ name }) => (
					<NavLink key={name} to={name}>
						{name}
					</NavLink>
				))}
			</ul>
		</>
	);
};
