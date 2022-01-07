import { spacex } from '../../projectData';
import ProjectDisplay1 from './ProjectDisplay1';

const Spacex = () => {
	return (
		<div className='h-screen w-full'>
			<ProjectDisplay1
				title={spacex.title}
				description={spacex.description}
				tools={spacex.tools}
				github={spacex.github}
				url={spacex.url}
				image={spacex.image}
			/>
		</div>
	);
};

export default Spacex;
