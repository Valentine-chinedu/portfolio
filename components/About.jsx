import Image from "next/image";
import Slide from "react-reveal/Slide";

function About() {
	return (
		<div id='about' className='relative px-6 md:px-12 pb-12 h-full mb-8 pt-8'>
			<Slide bottom duration={1000}>
				<div className='flex items-center justify-center mb-8 overflow-x-hidden'>
					<div className='bg-[#00ffff] h-[0.15rem] w-[7rem] md:w-[15rem]'></div>

					<span className='font-bold text-2xl text-gray-400 md:text-3xl mx-2 md:mx-4'>
						About Me
					</span>

					<div className='bg-[#00ffff] h-[0.15rem] w-[7rem] md:w-[15rem]'></div>
				</div>

				<div className='space-y-6 tracking-wider mb-8 md:mb-14 pl-2 overflow-y-hidden md:text-lg text-gray-400'>
					<p>
						I am Valentine Chinedu. I am a web developer who enjoys building
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
				<div className='flex relative w-full justify-center'>
					<div className='h-60 w-60 md:h-80 md:w-80 border-2 border-[#00ffff] rounded'></div>
					<img
						className='h-60 w-60 md:h-80 md:w-80 rounded object-cover absolute bottom-4 md:bottom-5 md:left-[9.5rem] right-[5rem]
						'
						src='photo-suite.png'
						alt='png'
					/>
				</div>
			</Slide>
		</div>
	);
}

export default About;
