import { NavbarButton } from './NavbarButton';

export const Navbar = () => {
	return (
		<nav className='flex justify-between p-1 mt-3 border-b'>
			<NavbarButton name='overview' />
			<NavbarButton name='structure' />
			<NavbarButton name='surface' />
		</nav>
	);
};
