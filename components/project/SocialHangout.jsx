import { socialHangout } from './projectData';
import ProjectDetails from './ProjectDetails';

const SocialHangout = () => {
	return (
		<div>
			<ProjectDetails
				title={socialHangout.title}
				description={socialHangout.description}
				tools={socialHangout.tools}
				github={socialHangout.github}
				url={socialHangout.url}
				image={socialHangout.image}
			/>
		</div>
	);
};

export default SocialHangout;
