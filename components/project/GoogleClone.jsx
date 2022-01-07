import { googleClone } from '../../projectData';
import ProjectDisplay1 from './ProjectDisplay1';

const GoogleClone = () => {
	return (
		<div className='h-screen w-full'>
			<ProjectDisplay1
				title={googleClone.title}
				description={googleClone.description}
				tools={googleClone.tools}
				github={googleClone.github}
				url={googleClone.url}
				image={googleClone.image}
			/>
		</div>
	);
};

export default GoogleClone;
