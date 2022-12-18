import { useAppSelector } from '../app';
import { saturn, saturnInternal, geologySaturn } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { getContentAndSource, getPlanetData } from '../helpers';
import { PlanetView } from '../views';

export const Saturn = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = getPlanetData(
		planets,
		'Saturn'
	);

	return (
		<PlanetView planet={getPlanetData(planets, 'Saturn')}>
			<Navbar borderColor='border-b-LightOrange' />
			<PlanetImage
				Img={isOverviewActive ? saturn : isStructureActive ? saturnInternal : isSurfaceActive ? geologySaturn : ''}
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
