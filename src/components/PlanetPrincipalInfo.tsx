import { Navbar } from './Navbar';

interface PlanetPrincipalInfoProps {
	title: string;
	content: string;
	source: string;
	bgColor?: string;
}

export const PlanetPrincipalInfo = ({ title, content, source, bgColor }: PlanetPrincipalInfoProps) => {
	return (
		<div className='h-60 text-center flex flex-col justify-evenly mb-7 md:mt-20 md:text-start md:flex-row'>
			<div className='space-y-5 md:max-w-[339px] md:space-y-8'>
				<h1 className='font-Antonio text-4xl text-White md:text-5xl'>{title}</h1>
				<p className='font-Spartan text-[15px] font-thin md:text-base'>{content}</p>
				<div className='flex items-center justify-center space-x-1 text-LightGray text-xs md:justify-start md:text-sm'>
					<p className='underline'>Source:</p>
					<a href={source} className='underline'>
						Wikipedia
					</a>
					<img src='./assets/icon-source.svg' alt='src' />
				</div>
			</div>
			<Navbar extraClassname='hidden md:flex' bgColor={bgColor} />
		</div>
	);
};
