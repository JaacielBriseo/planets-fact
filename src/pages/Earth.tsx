import { earth, earthInternal, geologyEarth } from '../assets';
import { usePlanet } from '../hooks';
import { PlanetView } from '../views';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';

export const Earth = () => {
	const {
		isOverviewActive,
		isStructureActive,
		isSurfaceActive,
		rotation,
		revolution,
		radius,
		temperature,
		name,
		content,
		source,
	} = usePlanet('Earth');

	return (
		<PlanetView>
			<Navbar borderColor='border-b-Purplish' />
			<PlanetImage
				Img={isOverviewActive ? earth : isStructureActive ? earthInternal : isSurfaceActive ? geologyEarth : ''}
			/>
			<PlanetPrincipalInfo title={name} content={content} source={source} />
			<PlanetSecondaryInfo>
				<SecondaryInfoData data={rotation} title='rotation time' />
				<SecondaryInfoData data={revolution} title='revolution time' />
				<SecondaryInfoData data={radius} title='radius' />
				<SecondaryInfoData data={temperature} title='average temp' />
			</PlanetSecondaryInfo>
		</PlanetView>
	);
};
