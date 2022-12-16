import { useAppSelector, useAppDispatch, toggleMobileMenu } from '../app';

export const HamburgerButton = () => {
	const { isMobileMenuOpen } = useAppSelector((state) => state.planets);
	const dispatch = useAppDispatch();
	return (
		<div className='w-6 h-4'>
			<button onClick={() => dispatch(toggleMobileMenu())} type='button' className='flex flex-col space-y-1'>
				<span className={`${isMobileMenuOpen ? 'bg-DarkGray' : 'bg-White'} w-6 h-[3px]`}></span>
				<span className={`${isMobileMenuOpen ? 'bg-DarkGray' : 'bg-White'} w-6 h-[3px]`}></span>
				<span className={`${isMobileMenuOpen ? 'bg-DarkGray' : 'bg-White'} w-6 h-[3px]`}></span>
			</button>
		</div>
	);
};
