import GoogleClone from './GoogleClone';
import MovieApp from './MovieApp';
import Onstore from './Onstore';
import SocialHangout from './SocialHangout';
import Spacex from './Spacex';

function Projects() {
	return (
		<div
			id='projects'
			className='flex justify-center pt-8 bg-[url(/fakurian-design-ICTjWYzpoc0-unsplash.jpg)] bg-cover bg-fixed h-full'
		>
			<div className='flex flex-col items-center w-screen lg:w-4/5 h-full overflow-x-hidden'>
				<Onstore />
				<MovieApp />
				<Spacex />
				<SocialHangout />
				<GoogleClone />
			</div>
		</div>
	);
}

export default Projects;
