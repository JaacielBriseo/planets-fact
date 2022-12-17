import { useAppSelector } from '../app';
import { mars, marsInternal, geologyMars } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { PlanetView } from '../views';

export const Mars = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverview, isStructure, isSurface } = content;
	const marsData = planets.find((planet) => planet.name === 'Mars');
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = marsData!;
	return (
		<PlanetView>
			<Navbar />
			<PlanetImage Img={isOverview ? mars : isStructure ? marsInternal : isSurface ? geologyMars : ''} />
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
