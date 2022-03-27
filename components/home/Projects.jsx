import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
	EstateGuru,
	MovieApp,
	Onstore,
	SocialHangout,
	Spacex,
} from '../project';

function Projects() {
	const [ref, inView] = useInView({ threshold: 0.3 });
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.25,
				},
			});
		}
		if (!inView) {
			animation.start({ x: -100, opacity: 0 });
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className='flex h-full w-full flex-col items-center'
			id='projects'
		>
			<h2 className='mb-16 text-lg font-bold uppercase text-gray-600 dark:text-gray-200 md:mb-24 md:text-2xl lg:mb-36 lg:text-3xl'>
				projects
			</h2>
			<div className='flex h-full w-full flex-col items-center space-y-32 overflow-x-hidden md:space-y-36 lg:w-full lg:space-y-60'>
				<Onstore />
				<EstateGuru />
				<SocialHangout />
				<Spacex />
				<MovieApp />
			</div>
		</div>
	);
}

export default Projects;
