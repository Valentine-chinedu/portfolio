import React from 'react';
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
			className='flex h-screen w-screen flex-col items-center justify-center space-y-20 bg-[url("/abstract-design-purple-flowing-lines.jpg")] bg-cover md:space-y-32 md:px-12 lg:px-0'
			id='home'
		>
			<div className='z-10 flex w-full flex-col justify-center lg:items-center  '>
				<div className='w-ful flex flex-col items-center justify-center space-y-6  md:space-y-14 lg:w-9/12 lg:flex-row lg:space-x-12'>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5, ease: 'easeIn', delay: 0.5 }}
						className='mb-8 flex h-auto w-11/12 flex-col items-center space-y-4 px-4 md:space-y-8 lg:mb-0 lg:h-80 lg:w-full lg:items-start lg:justify-center lg:px-0'
					>
						<h1 className='text-2xl font-bold text-[#00FFFF] md:text-5xl lg:text-8xl'>
							Chinedu Valentine Okosi.
						</h1>
						<p className='pb-6 text-center text-base font-medium text-gray-100 md:text-xl lg:w-[40rem] lg:pb-6 lg:text-left lg:text-2xl '>
							I'm a Frontend Developer who is specialized in building and
							occasionally designing Webapps with high perfomance and intuitive
							user experience.
						</p>
						<div className='space-x-4 lg:mt-4 lg:space-x-8'>
							<AnchorLink href='#contact'>
								<a className='rounded-lg bg-[#1fd8d8] py-1.5 px-4 text-sm font-bold text-gray-900 hover:bg-[#00FFFF] md:py-3 md:px-6 md:text-base lg:py-4 lg:px-8 lg:text-lg'>
									Get In Touch
								</a>
							</AnchorLink>
							<AnchorLink
								href='#projects'
								className='hover:text-100 rounded-lg bg-gray-100 py-2 px-3 text-xs font-bold text-gray-900 hover:bg-[#00FFFF] hover:text-gray-800 md:py-3 md:px-6 md:text-base lg:py-4 lg:px-8 lg:text-lg'
							>
								Projects
							</AnchorLink>
						</div>
					</motion.div>
				</div>
			</div>
			<motion.svg
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, ease: 'easeIn', delay: 0.5 }}
				className='h-8 animate-bounce md:h-10'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
			>
				<path fill='none' d='M0 0h24v24H0z' />
				<path
					d='M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z'
					fill='rgba(60,231,213,1)'
				/>
			</motion.svg>

			{/* <div className='absolute inset-0 h-screen bg-black b lg:h-[750px]'></div> */}
		</motion.div>
	);
};

export default LandingPage;
