import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { RiArrowRightSFill } from 'react-icons/ri';
import Image from 'next/image';

function About() {
	const [show, setShow] = useState(false);

	const [ref, inView] = useInView({ threshold: 0.3 });
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 0,
				opacity: 1,
				transition: {
					duration: 1.25,
				},
			});
		}
	}, [inView]);

	return (
		<motion.div
			ref={ref}
			className='flex h-screen w-full flex-col items-center justify-center'
			id='about'
		>
			<motion.div
				animate={animation}
				initial={{ y: 100, opacity: 0 }}
				className='flex h-full w-full flex-col items-center justify-center space-y-8 md:space-y-14 lg:w-8/12 lg:flex-row lg:space-x-20'
			>
				<div className='relative flex flex-col items-center space-y-2 px-6 font-medium text-gray-800 dark:text-gray-300 md:space-y-4 md:px-8 md:text-lg lg:w-3/6 lg:space-y-6 lg:px-0 lg:text-lg'>
					<h1 className='mb-8 text-6xl font-bold uppercase text-gray-300 dark:text-gray-800 md:text-7xl lg:mb-0 lg:text-9xl'>
						About
					</h1>
					<h2 className='absolute top-4 text-lg font-semibold tracking-wider text-fuchsia-600 dark:text-[#00FFFF] md:bottom-16 md:text-xl lg:top-12 lg:text-3xl lg:font-bold'>
						A bit about myself
					</h2>
					<div className='space-y-2 lg:space-y-4'>
						<div className='space-y-2 text-sm text-gray-700 dark:text-gray-300 md:text-base'>
							<p>
								Hello! My name is Valentine and I specialize in helping client
								build their business through developing effective and problem
								solving Frontend Aplications.
							</p>
							<p>
								Creating the best software exprience for costumers and
								presenting products and services with the best possible design.
							</p>
						</div>
						<div
							className={` space-y-2 overflow-hidden text-sm transition-[height] duration-500 md:text-base ${
								show ? 'h-52 lg:h-56' : 'h-0'
							}`}
						>
							<p>
								My interest in software development started in 2020 while
								working as a business developer in Lagos, Nigeria, I noticed
								that most problems our clients and their customers faced was
								around softwares, so I took interest in learning software
								development.
							</p>
							<p>
								Fast-forward to today and I have become confortable building
								high qaulity, responsive websites and web applications,
								utilizing modern technologies like React and Nextjs.
							</p>
						</div>
						<div className='text-sm text-fuchsia-600 dark:text-[#00FFFF] md:text-base lg:text-base'>
							{show ? (
								<button
									className='font-semibold focus:outline-none'
									onClick={() => setShow(false)}
								>
									Read less
								</button>
							) : (
								<button
									className='font-semibold focus:outline-none'
									onClick={() => setShow(true)}
								>
									Read more
								</button>
							)}
						</div>
					</div>
				</div>
				<div className='flex h-60 w-60 items-center justify-center rounded-md shadow-md shadow-fuchsia-600 dark:shadow-[#00FFFF] md:h-80 md:w-80 lg:h-96 lg:w-96'>
					<div className='relative h-48 w-44 rounded-full md:h-64 md:w-60 lg:h-72 lg:w-[17rem]'>
						<Image
							className=' rounded-full'
							src='/me.jpg'
							alt='profile picture'
							layout='fill'
						/>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default About;
