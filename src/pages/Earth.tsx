import { usePlanet } from '../hooks';
import { PlanetView } from '../views';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';

export const Earth = () => {
	const { content, img, name, radius, revolution, rotation, source, temperature } = usePlanet('Earth');

	return (
		<PlanetView>
			<Navbar borderColor='border-b-Earth' extraClassname='md:hidden' />
			<PlanetImage Img={img} />
			<PlanetPrincipalInfo title={name} content={content} source={source} bgColor='bg-Earth' />
			<PlanetSecondaryInfo>
				<SecondaryInfoData data={rotation} title='rotation time' />
				<SecondaryInfoData data={revolution} title='revolution time' />
				<SecondaryInfoData data={radius} title='radius' />
				<SecondaryInfoData data={temperature} title='average temp' />
			</PlanetSecondaryInfo>
		</PlanetView>
	);
};
