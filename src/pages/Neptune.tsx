import { useAppSelector } from '../app';
import { neptune, neptuneInternal, geologyNeptune } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { getContentAndSource, getPlanetData } from '../helpers';
import { PlanetView } from '../views';

export const Neptune = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = getPlanetData(
		planets,
		'Neptune'
	);

	return (
		<PlanetView>
			<Navbar borderColor='border-b-SkyBlue' />
			<PlanetImage
				Img={isOverviewActive ? neptune : isStructureActive ? neptuneInternal : isSurfaceActive ? geologyNeptune : ''}
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
