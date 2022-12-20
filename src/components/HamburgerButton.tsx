import { useAppSelector, useAppDispatch, toggleMobileMenu } from '../app';
export const HamburgerButton = () => {
	const { isMobileMenuOpen } = useAppSelector((state) => state.planets);
	const dispatch = useAppDispatch();
	return (
		<div className='w-6 h-4 md:hidden'>
			<button onClick={() => dispatch(toggleMobileMenu())} type='button'>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='17'>
					<g fill={`${isMobileMenuOpen ? '#38384F' : '#FFF'}`} fillRule='evenodd'>
						<path d='M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z' />
					</g>
				</svg>
			</button>
		</div>
	);
};
