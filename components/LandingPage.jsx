import { motion } from 'framer-motion';
import Image from 'next/image';

function LandingPage({ openSideBar }) {
	const variants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 1.25 },
		},
	};

	return (
		<div
			id='home'
			className={`relative flex flex-co justify-center bg-gradient-to-t from-black to-black overflow-hidden px-6 md:pl-12 h-screen w-full lg:mb-4 ${
				openSideBar ? 'filter blur-sm' : ''
			}`}
		>
			<div className='flex flex-col relative items-center justify-center h-screen w-screen lg:w-4/5'>
				<motion.div
					variants={variants}
					initial='hidden'
					animate='show'
					className='flex flex-col justify-center lg:flex-none h-full absolute px-4 md:right-[10rem] lg:right-0 z-40 lg:w-full '
				>
					<h3 className='text-cyan-400 md:text-lg lg:text-lg mb-4 md:mb-6 font-semibold tracking-wider'>
						Hi, my name is
					</h3>

					<h1 className='font-bold text-3xl md:text-5xl lg:text-7xl text-stone-200 mb-3 md:mb-6 overflow-hidden'>
						Valentine Okosi C.
					</h1>

					<h1 className='font-bold text-3xl md:text-5xl lg:text-6xl text-gray-400 mb-8 md:mb-14'>
						I build things for the web.
					</h1>

					<p className='text-lg md:text-xl text-gray-300 mb-12 border-2 border-cyan-400 bg-black bg-opacity-60 py-4 px-4 md:mb-16 md:w-[25rem] lg:w-[28rem]'>
						I'm a frontend developer who specializes in building exceptional
						digital expriences, accessible and human-centered products.
					</p>
					<div className='w-full flex justify-center md:justify-start'>
						<a
							className='border-2 border-solid bg-gradient-to-tr from-cyan-900 to-cyan-600 shadow-lg hover:shadow-cyan-200 rounded-md px-8 py-4 text-[#00ffff] md:text-xl tracking-wider'
							href='#contact'
						>
							Get In Touch
						</a>
					</div>
				</motion.div>
				<div className='relative md:left-[9rem] lg:left-44 h-[22rem] w-[23rem] md:h-[28rem] md:w-[40rem] lg:h-[45rem] lg:w-[60rem] object-cover opacity-25 z-30'>
					<Image src={'/coding.png'} alt='pics' layout='fill' />
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
