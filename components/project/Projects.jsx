import { projects } from "../../data";
import ProjectDisplay from "./ProjectDisplay";

function Projects() {
	return (
		<div
			id='projects'
			className='mb-20 pt-8 lg:container overflow-hidden px-6 md:px-12 lg:mx-auto lg:px-80'
		>
			<div className='flex items-center mb-8 md:mb-12 text-lg md:text-2xl lg:justify-start'>
				<div className='text-[#00ffff] font-mono'>03.</div>

				<span className='font-bold text-gray-300 ml-2 mr-3 md:ml-4 md:mr-5'>
					Projects
				</span>
			</div>
			{projects.map((project) => (
				<div key={project._id} className='relative overflow-hidden'>
					<ProjectDisplay project={project} />
				</div>
			))}
		</div>
	);
}

export default Projects;
