export interface Planets {
	name: string;
	overview: {
		content: string;
		source: string;
	};
	structure: {
		content: string;
		source: string;
	};
	geology: {
		content: string;
		source: string;
	};
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: {
		planet: string;
		internal: string;
		geology: string;
	};
}

export interface InitialStateProps {
	planets: Planets[];
	isMobileMenuOpen: boolean;
	content: {
		isOverviewActive: boolean;
		isStructureActive: boolean;
		isSurfaceActive: boolean;
	};
}
export interface ImagesContent {
	planet: string;
	internal: string;
	geology: string;
}

export interface GetImageFn {
	(isOverviewActive: boolean, isStructureActive: boolean, isSurfaceActive: boolean, images: ImagesContent): string;
}

export interface Data {
	content: string;
	source: string;
}

export interface GetContentAndSourceFn {
	(
		isOverviewActive: boolean,
		isStructureActive: boolean,
		isSurfaceActive: boolean,
		overview: Data,
		structure: Data,
		geology: Data
	): {
		content: string;
		source: string;
	};
}
export interface GetPlanetDataFn {
	(planets: Planets[], planetToGet: string): Planets;
}