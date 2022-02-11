import { spacex } from './projectData';
import ProjectDetails from './ProjectDetails';

const Spacex = () => {
	return (
		<div>
			<ProjectDetails
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
