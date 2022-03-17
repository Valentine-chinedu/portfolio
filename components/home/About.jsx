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
			className=' flex h-full w-screen flex-col items-center pt-20 md:justify-center md:px-12 md:pb-0 md:pt-28 lg:container lg:mx-auto '
		>
			<div className='flex h-full flex-col items-center justify-center space-y-8 md:space-y-12'>
				<div className='flex h-64 w-64 items-center justify-center rounded-md shadow-md shadow-fuchsia-600 dark:shadow-[#00FFFF] md:h-80 md:w-80'>
					<div className='relative h-48 w-44 rounded-full md:h-64 md:w-60'>
						<Image
							className=' rounded-full'
							src='/me.jpg'
							alt='profile picture'
							layout='fill'
						/>
					</div>
				</div>

				<div className='flex items-end space-x-1'>
					<h1 className='text-xl font-semibold md:text-2xl'>
						Valentine Okosi C -
					</h1>
					<h3 className='text-lg font-medium text-fuchsia-600 dark:text-[#00FFFF] md:text-xl'>
						Frontend Developer
					</h3>
				</div>

				<div className='w-full space-y-4'>
					<div className='flex w-full justify-center text-lg font-semibold md:text-xl'>
						<h2>WHAT I DO</h2>
					</div>

					<ul className='ml-2 w-full list-inside list-disc space-y-1.5 pr-2 text-sm font-medium md:space-y-1 md:text-xl'>
						<li>Convert designs to pixel perfect HTML code</li>
						<li>Ensure Responsiveness and compatability</li>
						<li>Style and Animate websites</li>
						<li>Add interactivity to websites</li>
						<li>Build Single Page Apps</li>
						<li>Build Server-side rendered and Static-site websites</li>
						<li>Perform CRUD operation using REST API</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
