import { GetPlanetDataFn } from '../interfaces';

export const getPlanetData: GetPlanetDataFn = (planets, planetToGet) => {
	const planet = planets.find((planet) => planet.name === planetToGet);
	if (planet) {
		return planet;
	} else {
		throw new Error(`Planet with name ${planetToGet} not found`);
	}
};
