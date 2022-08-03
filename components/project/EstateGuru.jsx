import { estateguru } from './projectData';
import ProjectDetails from './ProjectDetails';

const EstateGuru = () => {
	return (
		<>
			<ProjectDetails
				title={estateguru.title}
				description={estateguru.description}
				tools={estateguru.tools}
				github={estateguru.github}
				url={estateguru.url}
				image={estateguru.image}
			/>
		</>
	);
};

export default EstateGuru;
