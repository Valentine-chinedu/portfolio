import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillsDetails from './SkillsDetails';

const ServerState = () => {
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
		'While using context-api/hooks or Redux for state management, I find React-query and RTK-query best suitable for managing asynchronous state in React. Although I prefer working with react-query over rtk-query both offers the same functionalities for data fetching and caching and I feel confortable working with both.';
	const tags = ['React-Query', 'RTK-Query'];
	return (
		<motion.div
			ref={ref}
			className='justify-cente flex h-full w-full flex-col items-center'
		>
			<SkillsDetails
				title='Data Fetching'
				description={description}
				tags={tags}
				animation={animation}
				image='/images/react-query.png'
			/>
		</motion.div>
	);
};

export default ServerState;
