export const PlanetImage = ({ Img }: { Img: string }) => {
	return (
		<div className='flex justify-center items-center h-56 lg:items-start lg:w-8/12'>
			{Img.includes('geology') ? (
				<>
					<div className='relative'>
						<img
							src={Img.replace('geology', 'planet').replace('png', 'svg')}
							alt=''
							className='w-28 h-28 md:w-44 md:h-44 md:mt-28 lg:w-72 lg:h-72'
						/>
						<img
							src={Img}
							alt='Planet'
							className='w-14 md:w-24 lg:w-36 absolute -bottom-5 left-1/4 md:-bottom-10 lg:-bottom-14'
						/>
					</div>
				</>
			) : (
				<img src={Img} alt='Planet' className='w-28 h-28 md:w-44 md:h-44 md:mt-28 lg:w-72 lg:h-72' />
			)}
		</div>
	);
};
