import { movieApp } from './projectData';
import ProjectDetails from './ProjectDetails';

const MovieApp = () => {
	return (
		<>
			<ProjectDetails
				title={movieApp.title}
				description={movieApp.description}
				tools={movieApp.tools}
				github={movieApp.github}
				url={movieApp.url}
				image={movieApp.image}
			/>
		</>
	);
};

export default MovieApp;
