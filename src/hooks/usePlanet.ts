import { useAppSelector } from '../app';
import { getPlanetData, getContentAndSource, getImage } from '../helpers';

export const usePlanet = (planetToUse: string) => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;

	const { geology, name, overview, radius, revolution, rotation, structure, temperature, images } = getPlanetData(
		planets,
		planetToUse
	);

	const { content: planetContent, source: planetSource } = getContentAndSource(
		isOverviewActive,
		isStructureActive,
		isSurfaceActive,
		overview,
		structure,
		geology
	);

	const img = getImage(isOverviewActive, isStructureActive, isSurfaceActive, images);

	return {
		content: planetContent,
		img,
		name,
		radius,
		revolution,
		rotation,
		source: planetSource,
		temperature,
	};
};
