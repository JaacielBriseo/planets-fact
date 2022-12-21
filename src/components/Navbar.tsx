import { NavbarButton } from '.';
import { useAppSelector } from '../app';

export interface NavBarProps {
	borderColor?: string;
	extraClassname?: string;
	bgColor?: string;
}
export const Navbar = ({ borderColor, extraClassname, bgColor }: NavBarProps) => {
	const { content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	return (
		<nav
			className={`flex justify-between p-3 mt-3 border-y border-y-DarkGray ${extraClassname} md:flex-col
			 md:border-none lg:w-[355px] lg:space-y-4`}
		>
			<NavbarButton name='Overview' isActive={isOverviewActive} borderColor={borderColor} bgColor={bgColor} />
			<NavbarButton name='Structure' isActive={isStructureActive} borderColor={borderColor} bgColor={bgColor} />
			<NavbarButton name='Surface' isActive={isSurfaceActive} borderColor={borderColor} bgColor={bgColor} />
		</nav>
	);
};
