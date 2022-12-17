interface Data {
	content: string;
	source: string;
}

export const getContentAndSource = (
	isOverviewActive: boolean,
	isStructureActive: boolean,
	isSurfaceActive: boolean,
	overview: Data,
	structure: Data,
	geology: Data
) => {
	if (isOverviewActive) {
		return { content: overview.content, source: overview.source };
	} else if (isStructureActive) {
		return { content: structure.content, source: structure.source };
	} else if (isSurfaceActive) {
		return { content: geology.content, source: geology.source };
	} else {
		return { content: '', source: '' };
	}
};
