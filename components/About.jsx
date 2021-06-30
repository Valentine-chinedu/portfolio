import Rotate from "react-reveal/Rotate";

function About() {
	return (
		<div
			id='about'
			className='relative px-6 pb-6 md:px-12 h-full overflow-hidden md:pb-4 mb-20 pt-8 lg:flex lg:container lg:mx-auto lg:px-80'
		>
			<div className=''>
				<div className='flex items-center mb-8 md:mb-12 lg:justify-start text-lg md:text-2xl'>
					<div className='text-[#00ffff] lg:text-xl font-mono'>01.</div>

					<span className='font-bold text-gray-100 ml-2 mr-3 md:ml-4 md:mr-5'>
						About Me
					</span>

					{/* <div className='bg-[#00ffff]  h-[0.10rem] w-[13rem]  sm:w-[14rem] md:w-[30rem] lg:w-[23rem]'></div> */}
				</div>

				<div className='space-y-6 tracking-wider mb-8 md:mb-16 overflow-hidden text-base md:text-lg text-gray-300 lg:tracking-normal lg:mr-4'>
					<p>
						I am Valentine. I am a frontend web developer who enjoys building
						engaging websites.
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
			<div className='flex w-full justify-center lg:mt-16'>
				{/* <div
					className='h-[13rem] w-[13rem] md:h-[14rem] md:w-[14rem] lg:h-50 lg:w-60 border-2 border-[#00ffff] rounded absolute top-3 right-[4rem] md:top-4 md:right-[13rem] lg:left-4 lg:top-[2rem]
						'
				></div> */}

				<img
					className='h-[10rem] w-[10rem] md:h-[14rem] md:w-[14rem] lg:h-60 lg:w-60 object-fill md:object-cover rounded'
					src='/IMG_20210614_135621.jpg'
					alt='png'
					loading='lazy'
				/>
			</div>
		</div>
	);
}

export default About;
