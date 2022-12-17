import { useAppSelector } from '../app';
import { saturn, saturnInternal, geologySaturn } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { PlanetView } from '../views';

export const Saturn = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverview, isStructure, isSurface } = content;
	const saturnData = planets.find((planet) => planet.name === 'Saturn');
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = saturnData!;
	return (
		<PlanetView>
			<Navbar />
			<PlanetImage Img={isOverview ? saturn : isStructure ? saturnInternal : isSurface ? geologySaturn : ''} />
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
