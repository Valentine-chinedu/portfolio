import { spacex } from './projectData';
import ProjectDetails from './ProjectDetails';

const Spacex = () => {
	return (
		<>
			<ProjectDetails
				title={spacex.title}
				description={spacex.description}
				tools={spacex.tools}
				github={spacex.github}
				url={spacex.url}
				image={spacex.image}
			/>
		</>
	);
};

export default Spacex;
