import { useAppSelector } from '../app';
import { mars, marsInternal, geologyMars } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { getContentAndSource, getPlanetData } from '../helpers';
import { PlanetView } from '../views';

export const Mars = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = getPlanetData(
		planets,
		'Mars'
	);

	return (
		<PlanetView>
			<Navbar borderColor='border-b-DarkOrange' />
			<PlanetImage
				Img={isOverviewActive ? mars : isStructureActive ? marsInternal : isSurfaceActive ? geologyMars : ''}
			/>
			<PlanetPrincipalInfo
				title={name}
				{...getContentAndSource(isOverviewActive, isStructureActive, isSurfaceActive, overview, geology, structure)}
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
