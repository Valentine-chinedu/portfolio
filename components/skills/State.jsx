import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillsDetails from './SkillsDetails';

const State = () => {
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

	const description =
		'Redux, Context-api and React-hooks is my go to for global state management. While Context-api together with React-hooks is mostly enough for most of my projects, I can confortably work with Redux or of recent Redux/Toolkit if the Project demands for it.';
	const tags = ['Redux', 'Context-api/React-hooks'];
	return (
		<motion.div ref={ref} className='flex h-full w-full flex-col items-center'>
			<SkillsDetails
				title='State Management'
				description={description}
				tags={tags}
				animation={animation}
				image='/images/redux-context.png'
			/>
		</motion.div>
	);
};

export default State;
