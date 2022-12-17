import { Planets } from '../interfaces';

export const getPlanetData = (planets: Planets[], planetToGet: string): Planets => {
	const planet = planets.find((planet) => planet.name === planetToGet);
	if (planet) {
		return planet;
	} else {
		throw new Error(`Planet with name ${planetToGet} not found`);
	}
};
