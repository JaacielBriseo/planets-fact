import { Navbar } from '../components';
import MercuryImg from '../assets/planet-mercury.svg';
export const Mercury = () => {
	return (
		<div>
			<Navbar />
			<div className='flex justify-center'>
				<img src={MercuryImg} alt='' className='w-24 h-24' />
			</div>
		</div>
	);
};
