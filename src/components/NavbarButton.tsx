import { setContent, useAppDispatch } from '../app';
export const NavbarButton = ({ name }: { name: string }) => {
	const dispatch = useAppDispatch();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(setContent(event.currentTarget.name));
	};

	return (
		<button onClick={handleClick} name={name} className='w-[73px] uppercase font-bold font-Spartan text-xs border-b-2'>
			{name}
		</button>
	);
};
