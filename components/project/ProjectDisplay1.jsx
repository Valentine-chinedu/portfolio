import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

import { useInView } from 'react-intersection-observer';

const ProjectDisplay1 = ({
	projects,
	title,
	description,
	tools,
	github,
	url,
	image,
}) => {
	const [ref, isVisible] = useInView({ threshold: 0.2 });

	const variantsL = {
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
		<div ref={ref} className='relative flex flex-col  lg:py-32 h-full w-full'>
			<div className='relative mb-10 md:mb-12 lg:mb-0 lg:bottom-28 text-xl md:text-2xl uppercase font-bold text-stone-50 pl-4'>
				<p>{projects}</p>
			</div>
			<div className='flex flex-col lg:flex-row items-center justify-center w-full space-y-8 md:space-y-14 lg:space-x-32'>
				<motion.div
					variants={variantsL}
					animate={isVisible ? 'visible' : 'hidden'}
					transition={{ duration: 2, ease: 'easeInOut' }}
					className='flex  items-center'
				>
					<a href={url}>
						<div className='relative rounded-md ring-8 ring-cyan-500 w-72 md:w-[32rem] h-[18rem] md:h-[28rem] lg:h-[28rem]'>
							<Image
								className='rounded-md transform hover:scale-110 duration-500'
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
					className='flex flex-col lg:items-end mx-8 md:mx-0 space-y-5 md:space-y-10'
				>
					<h2 className='font-bold text-xl md:text-3xl text-stone-50'>
						{title}
					</h2>
					<p className='tracking-wide bg-gradient-to-br from-cyan-900 to-cyan-600 text-sm text-stone-50 md:text-lg lg:text-sm font-semibold md:w-[26rem] p-2 md:p-4 lg:w-96 lg:rounded lg:py-6 lg:pl-12 lg:pr-2 shadow-xl shadow-cyan-500'>
						{description}
					</p>
					<h3 className='tracking-wider text-sm md:text-lg lg:text-sm lg:font-semibold text-stone-50'>
						{tools}
					</h3>
					<div className='flex space-x-8'>
						<a href={url} target='_blank' rel='noopener noreferrer'>
							<FaExternalLinkAlt className='text-xl md:text-2xl text-cyan-500 hover:text-cyan-300' />
						</a>
						<a href={github} target='_blank' rel='noopener noreferrer'>
							<BsGithub className='text-xl md:text-2xl text-cyan-500 hover:text-cyan-300' />
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ProjectDisplay1;
