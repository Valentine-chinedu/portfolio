import { googleClone } from './projectData';
import ProjectDetails from './ProjectDetails';

const GoogleClone = () => {
	return (
		<div>
			<ProjectDetails
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
