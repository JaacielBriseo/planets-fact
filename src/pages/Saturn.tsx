import { usePlanet } from '../hooks';
import { PlanetView } from '../views';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';

export const Saturn = () => {
	const { content, img, name, radius, revolution, rotation, source, temperature } = usePlanet('Saturn');

	return (
		<PlanetView>
			<Navbar borderColor='border-b-Saturn' extraClassname='md:hidden'/>
			<PlanetImage Img={img} />
			<PlanetPrincipalInfo title={name} content={content} source={source} bgColor='bg-Saturn'/>
			<PlanetSecondaryInfo>
				<SecondaryInfoData data={rotation} title='rotation time' />
				<SecondaryInfoData data={revolution} title='revolution time' />
				<SecondaryInfoData data={radius} title='radius' />
				<SecondaryInfoData data={temperature} title='average temp' />
			</PlanetSecondaryInfo>
		</PlanetView>
	);
};
