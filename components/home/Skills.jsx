import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaTools } from 'react-icons/fa';
import { IoCodeWorkingSharp } from 'react-icons/io5';

function Skills() {
	const [ref, inView] = useInView({ threshold: 0.2 });
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
		<motion.section
			className='flex h-full w-full items-center justify-center bg-black  px-4 py-14 md:h-screen md:px-12 md:py-0 lg:px-0'
			id='skills'
			ref={ref}
		>
			<motion.div
				animate={animation}
				initial={{ y: 100, opacity: 0 }}
				className='flex h-full flex-col items-center justify-center'
			>
				<div className='relative mb-4 flex w-full justify-center md:mb-16'>
					<h2 className='text-6xl font-bold text-gray-800 md:text-7xl lg:text-9xl lg:font-bold'>
						SKILLS
					</h2>
					<h2 className=' absolute top-6 mb-16 text-lg font-bold text-[#00ffff] md:top-8 md:mb-24 md:text-xl lg:top-16 lg:mb-36 lg:text-3xl'>
						Technologies I work with
					</h2>
				</div>
				<div className=' mb-8 flex flex-col items-center space-y-4 font-medium text-gray-300 md:mb-14 md:space-y-8 md:text-lg lg:text-xl'>
					<p className='mb-6 text-center lg:mb-0'>
						I'm fully committed to the philosophy of life-long learning, and I
						believe if given the opportunity, I can learn anything.
					</p>
				</div>
				<div className='flex w-full flex-col items-center justify-center space-y-10 font-medium md:flex-row md:items-start md:justify-between md:space-y-0 lg:space-x-52 lg:pl-0 '>
					<div className='flex flex-col items-center space-y-4 text-gray-100'>
						<div className='flex flex-col items-center space-y-1 border-b-2 border-[#00ffff] px-4 pb-1'>
							<FaCode className='text-5xl' />
							<h2 className='font-bold uppercase text-[#00ffff] lg:text-xl'>
								programming
							</h2>
						</div>
						<ul className='space-y-2 text-center text-lg font-medium lg:text-base'>
							<li>Javascript</li>
							<li>Nodejs</li>
							<li>Typescript</li>
							<li>Solidity</li>
							<li>Html</li>
							<li>CSS</li>
						</ul>
					</div>
					<div className='flex flex-col items-center space-y-4 text-gray-100'>
						<div className='flex flex-col items-center space-y-1 border-b-2 border-[#00ffff] px-4 pb-1'>
							<IoCodeWorkingSharp className='text-5xl' />
							<h2 className='font-bold uppercase text-[#00ffff] lg:text-xl'>
								Frameworks
							</h2>
						</div>

						<ul className='space-y-2 text-center text-lg font-medium lg:text-base'>
							<li>Reactjs/Nextjs</li>
							<li>Expressjs</li>
							<li>Redux/Toolkit</li>
							<li>React-Query</li>
							<li>Ethers.js</li>
							<li>Tailwindcss</li>
							<li>SASS</li>
							<li>Bootstrap</li>
							<li>Styled Component</li>
							<li>Cypress</li>
						</ul>
					</div>
					<div className='flex flex-col items-center space-y-4 text-gray-100'>
						<div className='flex flex-col items-center space-y-1 border-b-2 border-[#00ffff] px-4 pb-1 md:space-y-4'>
							<FaTools className='text-4xl' />
							<h2 className='font-bold uppercase text-[#00ffff] lg:text-xl'>
								DataBase/Platforms
							</h2>
						</div>

						<ul className='space-y-2 text-center text-lg font-medium lg:text-base'>
							<li>MongoDb</li>
							<li>Postgresql</li>
							<li>Figma</li>
							<li>Github</li>
							<li>Git</li>
							<li>Firebase</li>
							<li>Vercel</li>
						</ul>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
}

export default Skills;
