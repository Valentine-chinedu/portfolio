import Image from "next/image";
import Slide from "react-reveal/Slide";

function About() {
	return (
		<div className='relative px-6 pb-12 h-full mb-8 text-gray-100'>
			<Slide bottom duration={1000}>
				<div className='flex items-center justify-center mb-8 overflow-x-hidden'>
					<div className='bg-[#00ffff] h-[0.15rem] w-[7rem]'></div>

					<span className='font-bold text-2xl mx-2'>About Me</span>

					<div className='bg-[#00ffff] h-[0.15rem] w-[7rem]'></div>
				</div>

				<div className='space-y-6 tracking-wider mb-8 overflow-y-hidden'>
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
						Currently, I am available for freelancing or a suitable web
						development position with opportunities for continuous learning.
					</p>
				</div>

				<Image
					className='rounded-md border-solid bo'
					src='/photo-suite.png'
					alt='man on suit'
					width={400}
					height={460}
					layout='responsive'
				/>
			</Slide>
		</div>
	);
}

export default About;
