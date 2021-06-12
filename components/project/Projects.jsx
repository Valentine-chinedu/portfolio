import datas from "../../data";
import ProjectDisplay from "./ProjectDisplay";
import Slide from "react-reveal/Slide";

function Projects() {
	return (
		<div id='projects' className='mb-16 pt-8'>
			<Slide bottom duration={1000}>
				<div className='flex items-center justify-center mb-8'>
					<div className='bg-[#00ffff] h-[0.15rem] w-[8rem] md:w-[16rem]'></div>
					<span className='font-bold text-2xl text-gray-400 md:text-3xl mx-2 md:mx-4 md:space-x-8'>
						Projects
					</span>
					<div className='bg-[#00ffff] h-[0.15rem] w-[8rem] md:w-[16rem]'></div>
				</div>
				{datas.map((data) => (
					<div key={data._id}>
						<ProjectDisplay data={data} />
					</div>
				))}
			</Slide>
		</div>
	);
}

export default Projects;
