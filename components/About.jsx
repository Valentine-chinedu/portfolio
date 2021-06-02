import Image from "next/image";
import Zoom from "react-reveal/Zoom";

function About() {
	return (
		<div className=' px-6 h-full pt-28 mb-8'>
			<div className='flex items-center justify-center mb-8 overflow-x-hidden'>
				<Zoom duration={1000} right>
					<div className='bg-green-400 h-[0.15rem] w-[5.8rem]'></div>
				</Zoom>
				<Zoom duration={1000}>
					<span className='font-bold text-2xl text-gray-800 mx-2'>
						About Me
					</span>
				</Zoom>
				<Zoom duration={1000} left>
					<div className='bg-green-400 h-[0.15rem] w-[5.8rem]'></div>
				</Zoom>
			</div>
			<Zoom duration={2000} bottom>
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
			</Zoom>
			<Image
				className='rounded-md border-solid bo'
				src='/photo-suite.png'
				alt='man on suit'
				width={400}
				height={460}
				layout='responsive'
			/>
		</div>
	);
}

export default About;
