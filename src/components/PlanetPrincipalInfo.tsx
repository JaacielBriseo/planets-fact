import { useContext } from 'react';
import { sourceIcon } from '../assets';
import { PlanetContext } from '../views/PlanetView';
import { useAppSelector } from '../app/store/hooks';
import { getContentAndSource } from '../helpers';


export const PlanetPrincipalInfo = () => {
	const { name, overview, geology, structure } = useContext(PlanetContext);
	const { content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const data = getContentAndSource(isOverviewActive, isStructureActive, isSurfaceActive, overview, geology, structure);

	return (
		<div className='h-60 text-center flex flex-col justify-evenly mb-7'>
			<h1 className='font-Antonio text-4xl text-White'>{name}</h1>
			<p className='font-Spartan text-[15px] font-thin'>{data.content}</p>
			<div className='flex items-center justify-center space-x-1 text-LightGray text-xs'>
				<p className='underline'>Source:</p>
				<a href={data.source} className='underline'>
					Wikipedia
				</a>
				<img src={sourceIcon} alt='src' />
			</div>
		</div>
	);
};
