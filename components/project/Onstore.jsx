import { onstore } from './projectData';
import ProjectDetails from './ProjectDetails';

const Onstore = () => {
	return (
		<div>
			<ProjectDetails
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
