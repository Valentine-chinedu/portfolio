function About() {
	return (
		<div
			id='about'
			className='relative px-6 md:px-12 pb-12 h-full overflow-hidden mb-8 md:mb-20 pt-8 lg:flex lg:container lg:mx-auto lg:px-80'
		>
			<div className=''>
				<div className='flex items-center mb-8 lg:justify-start'>
					<div className='bg-[#00ffff] h-[0.15rem] w-[7rem] md:w-[15rem] lg:hidden'></div>

					<span className='font-bold text-2xl text-gray-100 md:text-3xl mx-2 md:mx-4'>
						About Me
					</span>

					<div className='bg-[#00ffff] h-[0.10rem]  w-[7rem] md:w-[15rem] lg:w-[23.5rem]'></div>
				</div>

				<div className='space-y-6 tracking-wider mb-8 md:mb-16 pl-2 overflow-hidden text-base md:text-lg text-gray-300 lg:tracking-normal lg:mr-4'>
					<p>
						I am Valentine Chinedu. I am a frontend web developer who enjoys
						building engaging websites.
					</p>
					<p>
						I am currently focused on front-end, my motivation is to use my web
						development skills to develop results driven websites which offers
						maximum business solution potentials and sustained clients
						satisfaction.
					</p>
					<p>
						Currently, I am available for a suitable web development position or
						freelancing, with opportunities for continuous learning.
					</p>
				</div>
			</div>
			<div className='flex relative w-full justify-center lg:mt-16'>
				<div
					className='h-[13rem] w-[13rem] md:h-[14rem] md:w-[14rem] lg:h-50 lg:w-60 border-2 border-[#00ffff] rounded absolute top-3 right-[4rem] md:top-4 md:right-[13rem] lg:left-4 lg:top-[2rem]
						'
				></div>
				<img
					className='h-[13rem] w-[13rem] md:h-[14rem] md:w-[14rem] lg:h-60 lg:w-60 object-cover rounded z-30 relative lg:right-10 lg:bottom-1'
					src='/IMG_20210614_135621.jpg'
					alt='png'
					loading='lazy'
				/>
			</div>
		</div>
	);
}

export default About;
