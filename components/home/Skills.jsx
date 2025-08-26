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
			className='flex h-full w-full items-center justify-center border-t border-[#00FFFF] bg-black  px-4 py-14 md:h-screen md:px-12 md:py-0 lg:px-0'
			id='skills'
			ref={ref}
		>
			<motion.div
				animate={animation}
				initial={{ y: 100, opacity: 0 }}
				className='flex h-full flex-col items-center justify-center'
			>
				<div className='relative mb-8 flex w-full justify-center'>
					<h2 className='text-6xl font-bold text-gray-800 md:text-7xl lg:text-9xl lg:font-bold'>
						SKILLS
					</h2>
					<h2 className=' absolute top-6 mb-16 text-lg font-bold text-[#00ffff] md:top-8 md:mb-24 md:text-xl lg:top-16 lg:mb-36 lg:text-3xl'>
						Technologies I work with
					</h2>
				</div>
				<div className=' mb-8 flex flex-col items-center space-y-4 text-sm font-medium text-gray-300 md:mb-16 md:space-y-8 lg:text-base'>
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
								Frontend
							</h2>
						</div>
						<ul className='space-y-2 text-center text-sm font-medium lg:text-base'>
							<li>Javascript</li>
							<li>Html</li>
							<li>CSS</li>
							<li>Typescript</li>
							<li>Reactjs/Nextjs</li>
							<li>Graphql</li>
							<li>Redux/Toolkit</li>
							<li>React-Query</li>
							<li>Framer-motion</li>
							<li>Tailwindcss</li>
							<li>SASS</li>
							<li>Styled Component</li>
						</ul>
					</div>
					<div className='flex flex-col items-center space-y-4 text-gray-100'>
						<div className='flex flex-col items-center space-y-1 border-b-2 border-[#00ffff] px-4 pb-1'>
							<IoCodeWorkingSharp className='text-5xl' />
							<h2 className='font-bold uppercase text-[#00ffff] lg:text-xl'>
								Backend/Database
							</h2>
						</div>

						<ul className='space-y-2 text-center text-sm font-medium lg:text-base'>
							<li>Nodejs</li>
							<li>Expressjs</li>
							<li>MongoDb</li>
							<li>Postgresql</li>
							<li>MySQL</li>
							<li>Prisma</li>
							<li>TypeORM</li>
							<li>REST API</li>
							<li>Graphql API</li>
							<li>Apollo Server</li>
							<li>Supabase</li>
							<li>Firebase</li>
						</ul>
					</div>
					<div className='flex flex-col items-center space-y-4 text-gray-100'>
						<div className='flex flex-col items-center space-y-1 border-b-2 border-[#00ffff] px-4 pb-1 md:space-y-4'>
							<FaTools className='text-4xl' />
							<h2 className='font-bold uppercase text-[#00ffff] lg:text-xl'>
								Testing/Platforms
							</h2>
						</div>

						<ul className='space-y-2 text-center text-sm font-medium lg:text-base'>
							<li>PostMan</li>
							<li>Jest</li>
							<li>React Testing Library</li>
							<li>Playwright</li>
							<li>Cypress</li>
							<li>Github</li>
							<li>Netlify</li>
							<li>Heroku</li>
							<li>Vercel</li>
							<li>Docker</li>
							<li>Figma</li>
						</ul>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
}

export default Skills;
