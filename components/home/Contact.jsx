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
		'Feel free to reach out if you are looking to hire or collabrate on a project. I will always be glad to hear from you';

	return (
		<div ref={ref} className=' flex h-full w-full flex-col items-center pb-8  '>
			<HomeDetails
				animation={animation}
				title='get in Touch'
				image='/illustra/Form.png'
				details={details}
				link='/Form'
				name='Fill Form'
			/>
		</div>
	);
}

export default Projects;
