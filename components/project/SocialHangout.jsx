import { socialHangout } from '../../projectData';
import ProjectDisplay1 from './ProjectDisplay1';

const SocialHangout = () => {
	return (
		<div className='h-screen w-full'>
			<ProjectDisplay1
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
