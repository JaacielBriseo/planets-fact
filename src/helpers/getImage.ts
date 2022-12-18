import { GetImageFn } from "../interfaces";

export const getImage: GetImageFn = (isOverviewActive, isStructureActive, isSurfaceActive, images) => {
	const imageToShow = isOverviewActive
		? images.planet
		: isStructureActive
		? images.internal
		: isSurfaceActive
		? images.geology
		: '';

	return imageToShow;
};
