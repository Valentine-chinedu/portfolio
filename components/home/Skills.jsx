import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import HomeDetails from './HomeDetails';

function Skills() {
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
		'I"m a life long learner and enjoy learning new stuff! Improving my skills on a daily basis helps me keep up to date with the latest technologies. Although I"m focused on frontend skills for now, I also intend to delve into backend skills in the near future.';

	return (
		<div ref={ref} className='flex h-full w-full flex-col items-center '>
			<HomeDetails
				animation={animation}
				title='Technical skills'
				image='/illustra/skill.png'
				details={details}
				link='/Skills'
				as='/skills'
				name='View skills'
			/>
		</div>
	);
}

export default Skills;
