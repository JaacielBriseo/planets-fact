import { useAppSelector } from '../app';
import { uranus, uranusInternal, geologyUranus } from '../assets';
import { Navbar, PlanetImage, PlanetPrincipalInfo, PlanetSecondaryInfo, SecondaryInfoData } from '../components';
import { getContentAndSource, getPlanetData } from '../helpers';
import { PlanetView } from '../views';

export const Uranus = () => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = getPlanetData(
		planets,
		'Uranus'
	);

	return (
		<PlanetView planet={getPlanetData(planets, 'Uranus')}>
			<Navbar borderColor='border-b-Uranus' />
			<PlanetImage
				Img={isOverviewActive ? uranus : isStructureActive ? uranusInternal : isSurfaceActive ? geologyUranus : ''}
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
