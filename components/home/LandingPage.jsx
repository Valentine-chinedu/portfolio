import React from 'react';
import { motion } from 'framer-motion';
import { pageVariantsAnim } from '../../animation';
import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className=' flex h-screen w-screen flex-col items-center pt-20 md:justify-center md:px-12 md:pt-28 lg:container lg:mx-auto lg:pt-0'
			id='home'
		>
			<div className='flex h-full w-full flex-col items-center justify-center space-y-8 md:space-y-12 lg:h-screen lg:space-y-32'>
				<div className='flex w-full flex-col items-center space-y-4 lg:space-y-6 '>
					<h1 className='text-2xl font-bold text-fuchsia-600 dark:text-[#00FFFF] md:text-2xl lg:text-4xl'>
						Valentine Okosi C.
					</h1>
				</div>
				<div className='flex w-full flex-col items-center justify-center space-y-8 lg:flex-row lg:space-x-24'>
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
					<p className='w-11/12 px-4 font-medium text-gray-600 dark:text-gray-200 md:text-lg lg:w-auto'>
						A Frontend Developer who enjoys bringing businesses to life and
						reaching out to customers through effective software engineering.
					</p>
				</div>
				<div className='space-x-4'>
					<Link href='/contact'>
						<a className='rounded-lg bg-fuchsia-600 py-1 px-2 text-sm font-medium text-gray-100 dark:bg-[#00FFFF] dark:text-gray-800'>
							Get In Touch
						</a>
					</Link>
					<button className='rounded-lg bg-fuchsia-600 py-1 px-2 text-sm font-medium text-gray-100 dark:bg-[#00FFFF] dark:text-gray-800'>
						Resume
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default LandingPage;
