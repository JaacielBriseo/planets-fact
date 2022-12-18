import { createContext, ReactElement } from 'react';
import { Planets } from '../interfaces';

interface PlanetViewProps {
	children: ReactElement | ReactElement[];
	planet: Planets;
}
export const PlanetContext = createContext({} as Planets);
const { Provider } = PlanetContext;
export const PlanetView = ({ children, planet }: PlanetViewProps) => {
	return (
		<Provider value={planet}>
			<main>{children}</main>
		</Provider>
	);
};
