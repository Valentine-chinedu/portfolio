import Image from 'next/image';
import { motion } from 'framer-motion';
import { pageVariantsAnim } from '../../animation';

function About() {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='flex h-screen w-screen flex-col items-center pb-32 pt-40 md:justify-center md:px-12 md:pb-0 md:pt-28 lg:container lg:mx-auto lg:flex lg:flex-row lg:space-x-8 '
		>
			<div className='flex h-full w-full flex-col items-center justify-center md:w-4/5 lg:w-full'>
				<div className='relative mb-8 flex w-full flex-col items-center justify-center space-y-4 text-2xl md:mb-16 md:text-3xl lg:justify-start'>
					<h3 className='mb-4 text-lg font-bold uppercase text-stone-800 dark:text-blue-50 md:mb-16 md:text-xl lg:text-2xl'>
						About Me
					</h3>
					<div className='flex h-72 w-72 items-center justify-center rounded-md shadow-md shadow-fuchsia-600 dark:shadow-[#00FFFF] md:h-96 md:w-96'>
						<div className='relative h-52 w-52 rounded-full md:h-72 md:w-72'>
							<Image
								className=' rounded-full'
								src='/me.jpg'
								alt='profile picture'
								layout='fill'
							/>
						</div>
					</div>
				</div>

				<div className='flex w-full flex-col items-center space-y-2 px-6 font-medium text-gray-800 dark:text-blue-50 md:px-3 md:text-lg lg:w-3/5 lg:px-0'>
					<p>
						I'm Valentine Okosi, A Frontend developer who is determined to make
						an impact and succeed. I enjoy being creative, using code as a way
						to express myself. I strive to develope visually appealing designs
						with user exprience always the focus. Currently, I am available for
						a suitable frontend development position, with opportunities for
						continuous learning.
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
