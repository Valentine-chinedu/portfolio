import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { RiArrowRightSFill } from 'react-icons/ri';

function About() {
	const [ref, inView] = useInView({ threshold: 0.3 });
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.25,
				},
			});
		}
		if (!inView) {
			animation.start({ x: -100, opacity: 0 });
		}
	}, [inView]);

	return (
		<motion.div
			ref={ref}
			className=' md:pt- flex h-full w-screen flex-col items-center justify-center md:px-12 lg:container lg:mx-auto lg:pt-0'
			id='about'
		>
			<div className='flex h-full w-full flex-col items-center space-y-5 md:space-y-14 lg:w-7/12 lg:space-y-16'>
				<h1 className='mb-2 text-lg font-bold uppercase text-gray-800 dark:text-gray-200 md:text-xl lg:text-2xl'>
					About Me
				</h1>
				<div className='space-y-2 px-8 font-medium text-gray-800 dark:text-gray-300 md:space-y-4 md:text-center md:text-lg lg:px-0 lg:text-xl'>
					<p>
						Hello! My name is Valentine and I specialize in helping client build
						businesses through developing effective and problem solving Frontend
						Aplications. My interest in software development started in 2020
						while working as a business developer in Lagos, Nigeria. I noticed
						that most problems our clients and their customers faced was around
						softwares, so I took interest in learning software development.
					</p>
					<p>
						Fast-forward to today and I have become confortable building high
						qaulity, responsive websites and web applications, utilizing modern
						technologies like React and Nextjs.
					</p>
				</div>
				<div className='flex w-full flex-col items-start space-y-2 pl-2 md:items-center md:space-y-8 lg:space-y-12 lg:px-0'>
					<div className='flex w-full justify-center'>
						<h3 className=' font-bold uppercase text-gray-800 dark:text-gray-200 md:text-lg lg:text-xl'>
							What I do
						</h3>
					</div>

					<div className='w-12/12  items-center justify-center font-medium text-gray-800 dark:text-gray-300 md:text-lg lg:text-xl'>
						<div className='mb-3 flex items-center space-x-2'>
							<RiArrowRightSFill className='text-fuchsia-600 dark:text-[#00FFFF]' />
							<h3>Convert designs to pixel perfect HTML code</h3>
						</div>
						<div className='mb-3 flex items-center space-x-2'>
							<RiArrowRightSFill className='text-fuchsia-600 dark:text-[#00FFFF]' />
							<h3>Ensure Responsiveness and Compatability</h3>
						</div>
						<div className='mb-3 flex items-center space-x-2'>
							<RiArrowRightSFill className='text-fuchsia-600 dark:text-[#00FFFF]' />
							<h3>Style and Animate websites</h3>
						</div>
						<div className='mb-3 flex items-center space-x-2'>
							<RiArrowRightSFill className='text-fuchsia-600 dark:text-[#00FFFF]' />
							<h3>Add interactivity to websites</h3>
						</div>
						<div className='mb-3 flex items-center space-x-2'>
							<RiArrowRightSFill className='text-fuchsia-600 dark:text-[#00FFFF]' />
							<h3>Build Single and Multi Page Apps</h3>
						</div>
						<div className='mb-3 flex items-center space-x-2'>
							<RiArrowRightSFill className='text-fuchsia-600 dark:text-[#00FFFF]' />
							<h3>Build Server-side rendered and Static-sites</h3>
						</div>
						<div className='mb-3 flex items-center space-x-2'>
							<RiArrowRightSFill className='text-fuchsia-600 dark:text-[#00FFFF]' />
							<h3>Perform CRUD operation using REST API</h3>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
