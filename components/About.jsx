// import Rotate from "react-reveal/Rotate";
import Image from 'next/image';
// import profilePIc from '../public/me.jpg'

function About() {
	return (
		<div
			id='about'
			className='flex flex-col items-center lg:flex-row px-6 pb-6 md:px-12 h-full w-full overflow-hidden md:pb-20 mb-20 pt-8 lg:flex lg:container lg:mx-auto lg:px-80 lg:space-x-8'
		>
			<div className=''>
				<div className='flex items-center mb-8 md:mb-12 lg:justify-start text-lg md:text-2xl'>
					<div className='text-[#00ffff] lg:text-xl font-mono'>01.</div>

					<span className='font-bold text-gray-300 ml-2 mr-3 md:ml-4 md:mr-5'>
						About Me
					</span>

					{/* <div className='bg-[#00ffff]  h-[0.10rem] w-[13rem]  sm:w-[14rem] md:w-[30rem] lg:w-[23rem]'></div> */}
				</div>

				<div className='flex flex-col space-y-6 tracking-wider overflow-hidden text-sm md:text-lg text-gray-300 lg:tracking-normal lg:mr-4'>
					<p>
						I am Valentine. A frontend web developer who enjoys building
						engaging websites.
					</p>
					<p>
						I am currently focused on front-end, my motivation is to use my web
						development skills to develop results driven websites which offers
						maximum business solution potentials and sustained clients
						satisfaction.
					</p>
					<p className='pb-9 md:pb-16'>
						Currently, I am available for a suitable web development position,
						with opportunities for continuous learning.
					</p>
				</div>
			</div>
			<div className=' relative h-60 w-60 md:h-80 md:w-80 lg:w-[50rem] '>
				{/* <img
							className='h-56 w-56 md:h-80 md:w-80 lg:h-80 lg:w-80 object-fill rounded z-20'
							src='/IMG_20210614_135621.jpg'
							alt='png'
							loading='lazy'
						/> */}
				<Image
					className='rounded-md h-5'
					src='/me.jpg'
					alt='profile picture'
					width={500}
					height={500}
					reponsive
				/>
			</div>
		</div>
	);
}

export default About;
