import { useAppSelector } from '../app';
import { HamburgerButton, MobileMenu } from '../components';

export const Menu = () => {
	const { isMobileMenuOpen } = useAppSelector((state) => state.planets);
	return (
		<>
			<header className='font-Antonio w-[327px] h-9 flex justify-between items-center'>
				<div className='w-28 h-9 flex items-center justify-center'>
					<h1 className='text-White uppercase font-medium text-2xl'>The planets</h1>
				</div>
				<HamburgerButton />
			</header>
			{isMobileMenuOpen && <MobileMenu />}
		</>
	);
};
