import { ReactElement } from 'react';

interface PlanetSecondaryInfoProps {
	children: ReactElement | ReactElement[];
}

export const PlanetSecondaryInfo = ({ children }: PlanetSecondaryInfoProps) => {
	return <div className='space-y-4 md:flex md:items-center md: justify-around md:space-y-0 md:mt-14'>{children}</div>;
};
