import { useState } from 'react';
import { projects, projects2 } from '../project/projectData';
import ProjectDetails from '../project/ProjectDetails';

function Projects() {
	const [showMore, setShowMore] = useState(false);

	return (
		<div
			className='flex h-full w-full flex-col items-center bg-slate-900 py-12 lg:py-40'
			id='projects'
		>
			<div className='relative mb-12 flex w-full justify-center lg:mb-20'>
				<h2 className=' text-6xl font-bold uppercase text-gray-700 md:text-7xl lg:text-9xl'>
					portfolio
				</h2>
				<h3 className='absolute bottom-3 text-lg font-semibold text-[#00FFFF] md:text-2xl lg:bottom-6 lg:text-3xl lg:font-bold'>
					Personal Side Projects
				</h3>
			</div>
			<div>
				{projects.map((project) => (
					<div
						key={project.id}
						className='flex- mb-12 flex h-full w-full items-center overflow-x-hidden md:mb-20 lg:mb-32 lg:w-full'
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
				<div className='flex justify-center'>
					<button
						onClick={() => setShowMore((prev) => !prev)}
						className='mb-16 rounded-md border-4 border-[#00FFFF] px-3 py-1 text-sm font-bold tracking-wider text-gray-100 hover:bg-[#00FFFF] hover:text-gray-700 md:mb-24 md:px-6 md:py-2 md:text-base lg:mb-32'
					>
						{showMore ? 'Show Less' : 'Show More'}
					</button>
				</div>
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
			</div>
		</div>
	);
}

export default Projects;
