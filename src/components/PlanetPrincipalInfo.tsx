import { sourceIcon } from '../assets';

interface PlanetPrincipalInfoProps {
	title: string;
	text: string;
	source: string;
}

export const PlanetPrincipalInfo = ({ title, text, source }: PlanetPrincipalInfoProps) => {
	return (
		<div className='h-60 text-center flex flex-col justify-evenly mb-7'>
			<h1 className='font-Antonio text-4xl text-White'>{title}</h1>
			<p className='font-Spartan text-[15px] font-thin'>{text}</p>
			<div className='flex items-center justify-center space-x-1 text-LightGray text-xs'>
				<p className='underline'>Source:</p>
				<a href={source} className='underline'>
					Wikipedia
				</a>
				<img src={sourceIcon} alt='src' />
			</div>
		</div>
	);
};
