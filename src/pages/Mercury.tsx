import { useAppSelector } from '../app';
import { PlanetView } from '../views';
import { mercury } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';

export const Mercury = () => {
	const { planets } = useAppSelector((state) => state.planets);
	const mercuryData = planets.find((planet) => planet.name === 'Mercury');
	const { overview, geology, images, name, radius, revolution, rotation, structure, temperature } = mercuryData!;
	return (
		<PlanetView>
			<Navbar />
			<PlanetImage Img={mercury} />
			<PlanetPrincipalInfo text={overview.content} title={name} source={overview.source} />
			<PlanetSecondaryInfo>
				<SecondaryInfoData data={rotation} title='rotation time' />
				<SecondaryInfoData data={revolution} title='revolution time' />
				<SecondaryInfoData data={radius} title='radius' />
				<SecondaryInfoData data={temperature} title='average temp' />
			</PlanetSecondaryInfo>
		</PlanetView>
	);
};
