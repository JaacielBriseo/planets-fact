import { usePlanet } from '../hooks';
import { PlanetView } from '../views';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';

export const Mercury = () => {
	const { content, img, name, radius, revolution, rotation, source, temperature } = usePlanet('Mercury');

	return (
		<PlanetView>
			<Navbar borderColor='border-b-Purplish' />
			<PlanetImage Img={img} />
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
