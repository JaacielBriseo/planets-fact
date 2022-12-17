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
		isOverview: boolean;
		isStructure: boolean;
		isSurface: boolean;
	};
}
