import { movieApp } from '../../projectData';
import ProjectDisplay1 from './ProjectDisplay1';

const MovieApp = () => {
	return (
		<div className='h-screen w-full'>
			<ProjectDisplay1
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
