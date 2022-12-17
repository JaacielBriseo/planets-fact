import { NavbarButton } from '.';
import { useAppSelector } from '../app';

export const Navbar = ({ borderColor }: { borderColor: string }) => {
	const { content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	return (
		<nav className='flex justify-between p-3 mt-3 border-y border-y-DarkGray '>
			<NavbarButton name='Overview' isActive={isOverviewActive} borderColor={borderColor} />
			<NavbarButton name='Structure' isActive={isStructureActive} borderColor={borderColor} />
			<NavbarButton name='Surface' isActive={isSurfaceActive} borderColor={borderColor} />
		</nav>
	);
};
