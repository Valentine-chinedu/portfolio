import { movieApp } from './projectData';
import ProjectDetails from './ProjectDetails';

const MovieApp = () => {
	return (
		<div>
			<ProjectDetails
				title={movieApp.title}
				description={movieApp.description}
				tools={movieApp.tools}
				github={movieApp.github}
				url={movieApp.url}
				image={movieApp.image}
			/>
		</div>
	);
};

export default MovieApp;
