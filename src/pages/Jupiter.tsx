import { useAppSelector } from '../app';
import { jupiter, jupiterInternal, geologyJupiter } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { getContentAndSource, getPlanetData } from '../helpers';
import { PlanetView } from '../views';

export const Jupiter = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = getPlanetData(
		planets,
		'Jupiter'
	);

	return (
		<PlanetView planet={getPlanetData(planets, 'Jupiter')}>
			<Navbar borderColor='border-b-MidOrange' />
			<PlanetImage
				Img={isOverviewActive ? jupiter : isStructureActive ? jupiterInternal : isSurfaceActive ? geologyJupiter : ''}
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
