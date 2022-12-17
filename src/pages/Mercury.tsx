import { useAppSelector } from '../app';
import { PlanetView } from '../views';
import { mercury, mercuryInternal, geologyMercury } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';

export const Mercury = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverview, isStructure, isSurface } = content;
	const mercuryData = planets.find((planet) => planet.name === 'Mercury');
	const { overview, geology, name, radius, revolution, rotation, structure, temperature } = mercuryData!;

	return (
		<PlanetView>
			<Navbar />
			<PlanetImage Img={isOverview ? mercury : isStructure ? mercuryInternal : isSurface ? geologyMercury : ''} />
			<PlanetPrincipalInfo
				title={name}
				text={isOverview ? overview.content : isStructure ? structure.content : isSurface ? geology.content : ''}
				source={isOverview ? overview.source : isStructure ? structure.source : isSurface ? geology.source : ''}
			/>
			<PlanetSecondaryInfo>
				<SecondaryInfoData data={rotation} title='rotation time' />
				<SecondaryInfoData data={revolution} title='revolution time' />
				<SecondaryInfoData data={radius} title='radius' />
				<SecondaryInfoData data={temperature} title='average temp' />
			</PlanetSecondaryInfo>
		</PlanetView>
	);
};
