import { useNavigate } from 'react-router-dom';
import { HamburgerButton, PlanetsList } from '.';

export const Header = () => {
	const navigate = useNavigate();
	return (
		<header className='font-Antonio w-full h-9 flex justify-between items-center md:justify-center lg:justify-start'>
			<div className='w-28 h-9 flex items-center justify-center'>
				<h1 onClick={() => navigate('/')} className='text-White uppercase font-medium text-2xl'>
					The planets
				</h1>
			</div>
			<HamburgerButton />
		</header>
	);
};
