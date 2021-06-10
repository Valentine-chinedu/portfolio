import datas from "../../data";
import ProjectDisplay from "./ProjectDisplay";
import Slide from "react-reveal/Slide";

function Projects() {
	return (
		<div className='mb-16'>
			<Slide bottom duration={1000}>
				<div className='flex items-center justify-center mb-8'>
					<div className='bg-[#00ffff] h-[0.15rem] w-[7.5rem]'></div>

					<span className='font-bold text-2xl text-gray-100 mx-2'>
						Projects
					</span>

					<div className='bg-[#00ffff] h-[0.15rem] w-[7.5rem]'></div>
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
