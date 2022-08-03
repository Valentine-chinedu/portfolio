import { socialHangout } from './projectData';
import ProjectDetails from './ProjectDetails';

const SocialHangout = () => {
	return (
		<>
			<ProjectDetails
				title={socialHangout.title}
				description={socialHangout.description}
				tools={socialHangout.tools}
				github={socialHangout.github}
				url={socialHangout.url}
				image={socialHangout.image}
			/>
		</>
	);
};

export default SocialHangout;
