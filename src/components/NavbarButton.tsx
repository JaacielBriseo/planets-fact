import { setContent, useAppDispatch } from '../app';
interface NavbarButtonProps {
	name: string;
	isActive: boolean;
	borderColor?: string;
	bgColor?: string;
}
export const NavbarButton = ({ name, isActive, borderColor, bgColor }: NavbarButtonProps) => {
	const dispatch = useAppDispatch();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(setContent(event.currentTarget.name));
	};
	return (
		<button
			onClick={handleClick}
			name={name}
			className={`w-16 uppercase font-bold font-Spartan text-White text-center text-xs border-b-[3px] ${isActive && borderColor}
		   md:border md:w-64 md:h-10 ${isActive && bgColor}`}
		>
			{name}
		</button>
	);
};
