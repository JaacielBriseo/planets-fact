import { useAppSelector } from '../app';
import { PlanetView } from '../views';
import { mercury, mercuryInternal, geologyMercury } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { getContentAndSource, getPlanetData } from '../helpers';

export const Mercury = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const { overview, geology, name, radius, revolution, rotation, structure, temperature, images } = getPlanetData(
		planets,
		'Mercury'
	);

	return (
		<PlanetView>
			<Navbar borderColor='border-b-Aqua' />
			<PlanetImage
				Img={isOverviewActive ? mercury : isStructureActive ? mercuryInternal : isSurfaceActive ? geologyMercury : ''}
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
