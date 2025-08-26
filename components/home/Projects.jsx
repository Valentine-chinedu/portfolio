import { useEffect, useState } from 'react';
import { projects, projects2 } from '../project/projectData';
import ProjectDetails from '../project/ProjectDetails';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Projects() {
	const [showMore, setShowMore] = useState(false);

	const [ref, inView] = useInView({ threshold: 0.1 });
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
		<section
			ref={ref}
			className='border-t border-[#00FFFF] bg-black py-16 lg:py-16'
		>
			<motion.div
				animate={animation}
				initial={{ y: 100, opacity: 0 }}
				className='flex h-full w-full flex-col items-center '
				id='projects'
			>
				<div className='relative mb-16 flex w-full justify-center'>
					<h2 className=' text-6xl font-bold uppercase text-gray-700 md:text-7xl lg:text-8xl'>
						portfolio
					</h2>
					<h3 className='absolute bottom-3 text-2xl font-bold text-[#00FFFF] md:text-3xl lg:bottom-6 lg:text-4xl'>
						Projects
					</h3>
				</div>
				<div>
					{projects.map((project) => (
						<div
							key={project.id}
							className='flex- mb-16 flex h-full w-full items-center overflow-x-hidden md:mb-20 lg:mb-32 lg:w-full'
						>
							<ProjectDetails
								title={project.title}
								description={project.description}
								tools={project.tools}
								github={project.github}
								url={project.url}
								image={project.image}
							/>
						</div>
					))}
					{!showMore && (
						<div className='flex justify-center'>
							<button
								onClick={() => setShowMore((prev) => !prev)}
								className='mb-16 rounded-md border-4 border-[#00FFFF] px-3 py-1 text-sm font-bold tracking-wider text-gray-100 hover:bg-[#00FFFF] hover:text-gray-700 md:mb-24 md:px-6 md:py-2 md:text-base lg:mb-32'
							>
								Show more
							</button>
						</div>
					)}
					{projects2.map((project) => (
						<div
							key={project.id}
							className={`flex- mb-12 flex h-full w-full items-center overflow-x-hidden md:mb-20 lg:mb-32 lg:w-full ${
								showMore ? '' : 'hidden'
							}`}
						>
							<ProjectDetails
								title={project.title}
								description={project.description}
								tools={project.tools}
								github={project.github}
								url={project.url}
								image={project.image}
							/>
						</div>
					))}
					{showMore && (
						<div className='flex justify-center'>
							<AnchorLink
								href='#projects'
								onClick={() => setShowMore(false)}
								className='rounded-md border-4 border-[#00FFFF] px-3 py-1 text-sm font-bold tracking-wider text-gray-100 hover:bg-[#00FFFF] hover:text-gray-700 md:mb-24 md:px-6 md:py-2 md:text-base'
							>
								Show less
							</AnchorLink>
						</div>
					)}
				</div>
			</motion.div>
		</section>
	);
}

export default Projects;
