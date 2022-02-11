import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

import { useInView } from 'react-intersection-observer';

const ProjectDetails = ({ title, description, tools, github, url, image }) => {
	const [ref, isVisible] = useInView({ threshold: 0.2 });

	const variants = {
		visible: {
			opacity: 1,
			x: 0,
			rotateY: 360,
		},
		hidden: {
			opacity: 0,
			x: -100,
		},
	};
	const variantsR = {
		visible: {
			opacity: 1,
			x: 0,
		},
		hidden: {
			opacity: 0,
			x: 100,
		},
	};

	return (
		<div
			ref={ref}
			className='relative my-20 flex h-full w-full flex-col md:my-28 lg:my-32'
		>
			<div className=' flex h-full w-full flex-col items-center justify-center space-y-8 md:space-y-14 lg:flex-row lg:space-x-36'>
				<motion.div
					variants={variants}
					animate={isVisible ? 'visible' : 'hidden'}
					transition={{ duration: 2, ease: 'easeInOut' }}
					className='flex items-center'
				>
					<a href={url} target='_blank'>
						<div className='relative h-[18rem] w-72 rounded-md ring-4 ring-cyan-500 md:h-[28rem] md:w-[32rem] lg:h-[28rem]'>
							<Image
								className='transform rounded-md duration-500 hover:scale-110'
								src={image}
								alt='pics'
								layout='fill'
							/>
						</div>
					</a>
				</motion.div>

				<motion.div
					variants={variantsR}
					animate={isVisible ? 'visible' : 'hidden'}
					transition={{ duration: 2, ease: 'easeInOut' }}
					className='flex w-full flex-col space-y-5 px-10 md:space-y-10 md:px-32 lg:w-96 lg:items-center'
				>
					<h2 className='text-xl font-bold text-gray-600 dark:text-stone-50 md:text-3xl lg:w-96'>
						{title}
					</h2>
					<p className='bg-gradient-to-br from-cyan-900 to-cyan-600 p-2 text-sm font-semibold tracking-wide text-stone-50 shadow-lg shadow-gray-500 md:w-[26rem] md:p-4 md:text-lg lg:w-96 lg:rounded lg:py-6 lg:pl-12 lg:pr-2 lg:text-sm'>
						{description}
					</p>
					<h3 className='text-sm font-medium tracking-wider text-gray-800 dark:text-stone-50 md:text-lg lg:w-96 lg:text-base lg:font-semibold'>
						{tools}
					</h3>
					<div className='flex space-x-4 md:space-x-8 lg:w-96 lg:justify-start'>
						<a href={url} target='_blank' rel='noopener noreferrer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-5 text-cyan-500 hover:text-cyan-300 md:h-7 lg:h-8'
							>
								<title>External Link</title>
								<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
								<polyline points='15 3 21 3 21 9'></polyline>
								<line x1='10' y1='14' x2='21' y2='3'></line>
							</svg>
						</a>
						<a href={github} target='_blank' rel='noopener noreferrer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-5 text-cyan-500 hover:text-cyan-300 md:h-7 lg:h-8'
							>
								<title>GitHub</title>
								<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
							</svg>
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ProjectDetails;
