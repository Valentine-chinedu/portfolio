import { onstore } from '../../projectData';
import ProjectDisplay1 from './ProjectDisplay1';

const Onstore = () => {
	return (
		<div className='h-screen w-full'>
			<ProjectDisplay1
				projects='Projects'
				title={onstore.title}
				description={onstore.description}
				tools={onstore.tools}
				github={onstore.github}
				url={onstore.url}
				image={onstore.image}
			/>
		</div>
	);
};

export default Onstore;
