import { useAppSelector } from '../app';
import { PlanetView } from '../views';
import { mercury, mercuryInternal, geologyMercury } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { getPlanetData } from '../helpers';

export const Mercury = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const { radius, revolution, rotation, temperature } = getPlanetData(planets, 'Mercury');

	return (
		<PlanetView planet={getPlanetData(planets, 'Mercury')}>
			<Navbar borderColor='border-b-Aqua' />
			<PlanetImage
				Img={isOverviewActive ? mercury : isStructureActive ? mercuryInternal : isSurfaceActive ? geologyMercury : ''}
			/>
			<PlanetPrincipalInfo />
			<PlanetSecondaryInfo>
				<SecondaryInfoData data={rotation} title='rotation time' />
				<SecondaryInfoData data={revolution} title='revolution time' />
				<SecondaryInfoData data={radius} title='radius' />
				<SecondaryInfoData data={temperature} title='average temp' />
			</PlanetSecondaryInfo>
		</PlanetView>
	);
};
