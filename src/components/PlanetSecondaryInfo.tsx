import { ReactElement } from 'react';

interface PlanetSecondaryInfoProps {
	children: ReactElement | ReactElement[];
}

export const PlanetSecondaryInfo = ({ children }: PlanetSecondaryInfoProps) => {
	return <div className='h-56 space-y-4 mb-16'>{children}</div>;
};
