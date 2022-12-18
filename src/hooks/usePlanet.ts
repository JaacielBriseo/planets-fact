import { useAppSelector } from '../app';
import { getPlanetData, getContentAndSource } from '../helpers';

export const usePlanet = (planetToUse: string) => {
	const { planets, content } = useAppSelector((state) => state.planets);
	const { isOverviewActive, isStructureActive, isSurfaceActive } = content;
	const { geology, name, overview, radius, revolution, rotation, structure, temperature } = getPlanetData(
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

	return {
		isOverviewActive,
		isStructureActive,
		isSurfaceActive,
		overview,
		geology,
		structure,
		rotation,
		revolution,
		radius,
		temperature,
		name,
		content: planetContent,
		source: planetSource,
	};
};
