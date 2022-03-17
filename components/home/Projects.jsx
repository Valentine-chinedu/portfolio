import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import HomeDetails from './HomeDetails';

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

	const details =
		'Learning concepts and code is not just enough, so I like keeping busy with building projects to consolidate and showcase what I have learnt. Click on the button to view the projects that I have worked on.';

	return (
		<div ref={ref} className=' flex h-full w-full flex-col items-center'>
			<HomeDetails
				animation={animation}
				title='Projects'
				image='/illustra/development.png'
				details={details}
				link='/Projects'
				as='/projects'
				name='Projects'
			/>
		</div>
	);
}

export default Projects;
