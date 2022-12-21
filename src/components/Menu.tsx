import { useAppSelector } from '../app';
import { Header, MobileMenu, PlanetsList } from '.';

export const Menu = () => {
	const { isMobileMenuOpen } = useAppSelector((state) => state.planets);

	return (
		<div className='lg:flex lg:items-center lg:border-b lg:border-b-DarkGray'>
			<Header />
			{isMobileMenuOpen && <MobileMenu />}
			<PlanetsList />
		</div>
	);
};
