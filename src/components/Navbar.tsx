import { NavbarButton } from './NavbarButton';

export const Navbar = () => {
	return (
		<nav className='flex justify-between p-1 mt-3'>
			<NavbarButton name='Overview' />
			<NavbarButton name='Structure' />
			<NavbarButton name='Surface' />
		</nav>
	);
};
