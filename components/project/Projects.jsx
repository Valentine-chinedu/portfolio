import { projects } from "../../data";
import ProjectDisplay from "./ProjectDisplay";

function Projects() {
	return (
		<div
			id='projects'
			className='mb-16 pt-8 lg:container overflow-hidden lg:mx-auto lg:px-80'
		>
			<div className='flex items-center justify-center mb-8 lg:mb-16'>
				<div className='bg-[#00ffff] h-[0.10rem] w-[8rem] md:w-[16.5rem] lg:w-[23.5rem]'></div>

				<span className='font-bold text-2xl text-gray-100 md:text-3xl mx-2 md:mx-4 md:space-x-8'>
					Projects
				</span>

				<div className='bg-[#00ffff] h-[0.10rem] w-[8rem] md:w-[16.5rem] lg:w-[23.5rem]'></div>
			</div>
			{projects.map((project) => (
				<div key={project._id} className='relative'>
					<ProjectDisplay project={project} />
				</div>
			))}
		</div>
	);
}

export default Projects;
