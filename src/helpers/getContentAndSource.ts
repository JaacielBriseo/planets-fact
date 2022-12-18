import { GetContentAndSourceFn } from '../interfaces';

const getData = (content: string, source: string) => ({ content, source });

export const getContentAndSource: GetContentAndSourceFn = (
	isOverviewActive,
	isStructureActive,
	isSurfaceActive,
	overview,
	structure,
	geology
) => {
	return isOverviewActive
		? getData(overview.content, overview.source)
		: isStructureActive
		? getData(structure.content, structure.source)
		: isSurfaceActive
		? getData(geology.content, geology.source)
		: getData('', '');
};