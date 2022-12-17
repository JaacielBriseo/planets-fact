import { useAppSelector } from '../app';
import { neptune, neptuneInternal, geologyNeptune } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { PlanetView } from '../views';

export const Neptune = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverview, isStructure, isSurface } = content;
	const neptuneData = planets.find((planet) => planet.name === 'Neptune');
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = neptuneData!;
	return (
		<PlanetView>
			<Navbar />
			<PlanetImage Img={isOverview ? neptune : isStructure ? neptuneInternal : isSurface ? geologyNeptune : ''} />
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
