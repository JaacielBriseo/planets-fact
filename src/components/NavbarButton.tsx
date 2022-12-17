import { setContent, useAppDispatch } from '../app';
interface NavbarButtonProps {
	name: string;
	isActive: boolean;
	borderColor:string
}
export const NavbarButton = ({ name, isActive,borderColor }: NavbarButtonProps) => {
	const dispatch = useAppDispatch();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(setContent(event.currentTarget.name));
	};

	return (
		<button
		  onClick={handleClick}
		  name={name} 
		  className={`w-16 uppercase font-bold font-Spartan text-xs border-b-[3px] ${isActive && borderColor}`}>
			{name}
		</button>
	);
};
