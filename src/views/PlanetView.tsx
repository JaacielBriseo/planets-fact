import { ReactElement } from 'react';

interface PlanetViewProps {
	children: ReactElement | ReactElement[];
}

export const PlanetView = ({ children }: PlanetViewProps) => {
	return <main>{children}</main>;
};
