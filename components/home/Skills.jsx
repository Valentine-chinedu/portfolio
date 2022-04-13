import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaTools } from 'react-icons/fa';
import { IoCodeWorkingSharp } from 'react-icons/io5';

function Skills() {
	const [ref, inView] = useInView({ threshold: 0.3 });
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 0,
				opacity: 1,
				transition: {
					duration: 1.5,
				},
			});
		}
	}, [inView]);

	return (
		<motion.div
			className='flex h-full w-full items-center justify-center py-14 px-4 md:h-screen md:px-12 md:py-0 lg:px-0'
			id='skills'
			ref={ref}
		>
			<motion.div
				animate={animation}
				initial={{ y: 100, opacity: 0 }}
				className='flex h-full flex-col items-center justify-center'
			>
				<div className='relative mb-4 flex w-full justify-center md:mb-4'>
					<h2 className='text-6xl font-bold text-gray-300 dark:text-gray-800 md:text-7xl lg:text-9xl lg:font-bold'>
						SKILLS
					</h2>
					<h2 className=' absolute top-6 mb-16 text-lg font-bold text-fuchsia-600 dark:text-[#00ffff] md:top-8 md:mb-24 md:text-xl lg:top-16 lg:mb-36 lg:text-3xl'>
						Technologies I work with
					</h2>
				</div>
				<div className='mb-12 font-medium text-gray-700 dark:text-gray-400 md:mb-24 md:text-lg lg:mb-32'>
					<p>
						I'm fully committed to the philosophy of life-long learning, and I
						believe if given the opportunity, I can learn anything.
					</p>
				</div>
				<div className='flex w-full flex-col items-center justify-center space-y-10 font-medium md:flex-row md:items-start md:justify-between md:space-y-0 '>
					<div className='flex flex-col items-center space-y-4 text-gray-700 dark:text-gray-400'>
						<div className='flex flex-col items-center space-y-1 border-b-2 border-fuchsia-600 px-4 pb-1 dark:border-[#00ffff]'>
							<FaCode className='text-5xl' />
							<h2 className='font-bold uppercase text-fuchsia-600 dark:text-[#00ffff] lg:text-xl'>
								main skills
							</h2>
						</div>
						<ul className='space-y-2 text-center text-lg font-medium lg:text-base'>
							<li>Html</li>
							<li>CSS</li>
							<li>Javascript</li>
							<li>Typescript</li>
						</ul>
					</div>
					<div className='flex flex-col items-center space-y-4 text-gray-700 dark:text-gray-400'>
						<div className='flex flex-col items-center space-y-1 border-b-2 border-fuchsia-600 px-4 pb-1 dark:border-[#00ffff]'>
							<IoCodeWorkingSharp className='text-5xl' />
							<h2 className='font-bold uppercase text-fuchsia-600 dark:text-[#00ffff] lg:text-xl'>
								Frameworks
							</h2>
						</div>

						<ul className='space-y-2 text-center text-lg font-medium lg:text-base'>
							<li>Reactjs/Nextjs</li>
							<li>Redux/React-Query</li>
							<li>Tailwindcss</li>
							<li>SASS</li>
							<li>Bootstrap</li>
							<li>Styled Component</li>
						</ul>
					</div>
					<div className='flex flex-col items-center space-y-4 text-gray-700 dark:text-gray-400'>
						<div className='flex flex-col items-center space-y-1 border-b-2 border-fuchsia-600 px-4 pb-1 dark:border-[#00ffff] md:space-y-4'>
							<FaTools className='text-4xl' />
							<h2 className='font-bold uppercase text-fuchsia-600 dark:text-[#00ffff] lg:text-xl'>
								Tools
							</h2>
						</div>

						<ul className='space-y-2 text-center text-lg font-medium lg:text-base'>
							<li>Vscode</li>
							<li>Git</li>
							<li>Github</li>
							<li>Google</li>
						</ul>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default Skills;
