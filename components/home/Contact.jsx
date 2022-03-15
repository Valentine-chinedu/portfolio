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
		"Do you think that I would make a great addition to your team? I think so too. I am a young and passionate learner, ready to succeed in the tech world. I have a background that has built up my collabrative and communication skills. I'm dedicated to learning the ins and outs of your tech stack to keep up with high standard your users are used to.";

	return (
		<div ref={ref} className=' flex h-full w-full flex-col items-center pb-8  '>
			<HomeDetails
				animation={animation}
				title='get in Touch'
				image='/illustra/Form.png'
				details={details}
				link='/Form'
				as='/form'
				name='Contact Me'
			/>
		</div>
	);
}

export default Projects;
