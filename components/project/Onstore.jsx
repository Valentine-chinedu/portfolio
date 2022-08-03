import { onstore } from './projectData';
import ProjectDetails from './ProjectDetails';

const Onstore = () => {
	return (
		<>
			<ProjectDetails
				title={onstore.title}
				description={onstore.description}
				tools={onstore.tools}
				github={onstore.github}
				url={onstore.url}
				image={onstore.image}
			/>
		</>
	);
};

export default Onstore;
