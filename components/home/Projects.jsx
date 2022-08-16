import { projects } from '../project/projectData';
import ProjectDetails from '../project/ProjectDetails';

function Projects() {
	return (
		<div
			className='flex h-full w-full flex-col items-center bg-[url("/fakurian-design-ICTjWYzpoc0-unsplash.jpg")] bg-cover bg-fixed py-12 lg:py-40'
			id='projects'
		>
			<div className='relative mb-12 flex w-full justify-center lg:mb-20'>
				<h2 className=' text-6xl font-bold uppercase text-gray-700 md:text-7xl lg:text-9xl'>
					portfolio
				</h2>
				<h3 className='absolute bottom-3 text-lg font-semibold text-[#00FFFF] md:text-2xl lg:bottom-6 lg:text-3xl lg:font-bold'>
					Projects that I have built
				</h3>
			</div>

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
		</div>
	);
}

export default Projects;
