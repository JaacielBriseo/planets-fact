export const PlanetImage = ({ Img }: { Img: string }) => {
	return (
		<div className='flex justify-center items-center h-56'>
			<img src={Img} alt='Planet' className='w-28 h-28' />
		</div>
	);
};
