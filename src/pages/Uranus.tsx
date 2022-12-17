import { useAppSelector } from '../app';
import { uranus, uranusInternal, geologyUranus } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { PlanetView } from '../views';

export const Uranus = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverview, isStructure, isSurface } = content;
	const uranusData = planets.find((planet) => planet.name === 'Uranus');
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = uranusData!;
	return (
		<PlanetView>
			<Navbar />
			<PlanetImage Img={isOverview ? uranus : isStructure ? uranusInternal : isSurface ? geologyUranus : ''} />
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