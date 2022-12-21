interface SecondaryInfoDataProps {
	title: string;
	data: string;
}

export const SecondaryInfoData = ({ title, data }: SecondaryInfoDataProps) => {
	return (
		<div className='flex justify-between items-center p-3 border border-DarkGray uppercase md:flex-col md:w-40 md:h-[88px] md:items-start lg:h-28'>
			<h3 className='font-Spartan font-bold text-xs text-LightGray '>{title}</h3>
			<p className='font-Antonio font-medium text-xl text-White md:text-2xl lg:text-3xl'>{data}</p>
		</div>
	);
};
