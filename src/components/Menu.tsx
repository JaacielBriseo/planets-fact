import { useAppSelector } from '../app';
import { Header, MobileMenu } from '.';

export const Menu = () => {
	const { isMobileMenuOpen } = useAppSelector((state) => state.planets);
	return (
		<>
			<Header />
			{isMobileMenuOpen && <MobileMenu />}
		</>
	);
};
