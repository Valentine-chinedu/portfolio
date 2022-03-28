import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { pageVariantsAnim } from '../../animation';

const LandingPage = () => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className=' bg flex h-screen w-screen flex-col items-center md:justify-center md:px-12 lg:px-0'
			id='home'
		>
			<div className='flex h-full w-full flex-col items-start justify-center space-y-12 md:space-y-20 lg:h-screen lg:w-9/12 lg:space-y-32'>
				<div className='flex w-full flex-col items-center justify-center space-y-8 md:space-y-14 lg:flex-row-reverse lg:justify-evenly'>
					<div className='flex h-64 w-64 items-center justify-center rounded-md shadow-md shadow-fuchsia-600 dark:shadow-[#00FFFF] md:h-80 md:w-80 lg:h-96 lg:w-96'>
						<div className='relative h-48 w-44 rounded-full md:h-64 md:w-60 lg:h-72 lg:w-[17rem]'>
							<Image
								className=' rounded-full'
								src='/me.jpg'
								alt='profile picture'
								layout='fill'
							/>
						</div>
					</div>
					<div className='flex w-11/12 flex-col items-center space-y-8 px-4 lg:w-3/5 lg:space-y-16 lg:px-0'>
						<h1 className='text-2xl font-bold uppercase text-fuchsia-600 dark:text-[#00FFFF] md:text-4xl lg:text-6xl'>
							Valentine Okosi C.
						</h1>
						<p className=' text-center font-medium text-gray-800 dark:text-gray-200 md:text-lg lg:pr-4 lg:text-3xl'>
							A Frontend Developer who enjoys building WebApps and WebSites with
							high perfomance and intuitive user experience.
						</p>
						<div className='space-x-8 md:space-x-14 lg:space-x-20'>
							<AnchorLink href='#contact' offset={() => 100}>
								<a className='rounded-lg bg-fuchsia-600 py-1 px-2 font-medium text-gray-100 dark:bg-[#00FFFF] dark:text-gray-800 md:py-1.5 md:px-4 md:text-lg lg:text-xl'>
									Get In Touch
								</a>
							</AnchorLink>
							<a
								href='/valentine_resume.pdf'
								download
								rel='noonpener noreferrer'
								target='blank'
								className='rounded-lg bg-fuchsia-600 py-1 px-2 font-medium text-gray-100 dark:bg-[#00FFFF] dark:text-gray-800 md:py-1.5 md:px-4 md:text-lg lg:text-xl'
							>
								Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default LandingPage;
