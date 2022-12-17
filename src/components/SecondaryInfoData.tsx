interface SecondaryInfoData {
	title: string;
	data: string;
}

export const SecondaryInfoData = ({ title, data }: SecondaryInfoData) => {
	return (
		<div className='flex justify-between items-center p-3 border border-DarkGray uppercase'>
			<h3 className='font-Spartan font-bold text-xs text-LightGray'>{title}</h3>
			<p className='font-Antonio font-medium text-xl text-White'>{data}</p>
		</div>
	);
};
