import React from 'react';
import { motion } from 'framer-motion';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { pageVariantsAnim } from '../../animation';
import { useTheme } from 'next-themes';

const LandingPage = () => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='flex h-screen w-screen flex-col items-center justify-center bg-[url("/descWebp.png")] bg-cover bg-top md:px-12 lg:h-[750px] lg:px-0'
			id='home'
		>
			<div className='z-10 flex h-full w-full flex-col justify-center lg:items-start  '>
				<div className='flex w-full flex-col items-center justify-center space-y-6  md:space-y-14 lg:w-9/12 lg:flex-row lg:space-x-12'>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5, ease: 'easeIn', delay: 0.5 }}
						className='mb-8 flex h-auto w-11/12 flex-col items-center space-y-4 px-4 md:space-y-6 lg:mb-0 lg:h-80 lg:w-3/5 lg:items-start lg:justify-center lg:px-0'
					>
						<h1 className='text-2xl font-bold text-fuchsia-600 dark:text-[#00FFFF] md:text-4xl lg:text-6xl'>
							Chinedu Valentine Okosi.
						</h1>
						<p className='pb-6 text-center text-sm font-medium text-gray-100 md:text-xl lg:w-[40rem] lg:pb-6 lg:text-left lg:text-2xl '>
							A Frontend Developer and a UI Designer who is specialized in
							building Webapps with high perfomance and intuitive user
							experience.
						</p>
						<div className='space-x-4 lg:mt-4 lg:space-x-8'>
							<AnchorLink href='#contact' offset={() => 100}>
								<a className='hover:text-100 rounded-lg bg-gray-50 py-2 px-3 text-xs font-bold text-gray-900 hover:bg-fuchsia-600 dark:bg-gray-100 dark:hover:bg-[#00FFFF] dark:hover:text-gray-800 md:py-1.5 md:px-4 md:text-base'>
									Get In Touch
								</a>
							</AnchorLink>
							<a
								href='/chinedu_valentine_okosi_resume.pdf'
								download
								rel='noonpener noreferrer'
								target='blank'
								className='rounded-lg bg-fuchsia-600 py-1.5 px-4 text-sm font-bold text-gray-100 hover:bg-fuchsia-700 dark:bg-[#1fd8d8]  dark:text-gray-900 dark:hover:bg-[#00FFFF] md:py-1.5 md:px-4 md:text-base'
							>
								Resume
							</a>
						</div>
					</motion.div>
				</div>
			</div>
			<div className='absolute inset-0 h-screen bg-black bg-opacity-20 lg:h-[750px]'></div>
		</motion.div>
	);
};

export default LandingPage;
