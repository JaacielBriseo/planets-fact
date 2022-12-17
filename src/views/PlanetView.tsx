import { ReactElement } from "react";

interface PlanetViewProps {
	children: ReactElement | ReactElement[];
}

export const PlanetView = ({ children }: PlanetViewProps) => {
	return <div>{children}</div>;
};
