import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillsDetails from './SkillsDetails';

const FrameWorks = () => {
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
		'Libraries and frameworks makes it easier to work with Javascript. Reactjs being one of the most popular Javascript library, I took my time to learn and understand how it works and how to use it effectively. I also love working with Nextjs because of its production ready features including SEO, Server-side rendering and Static-site generation.';
	const tags = ['Reactjs', 'Nextjs'];
	return (
		<motion.div ref={ref} className='flex h-full w-full flex-col items-center'>
			<SkillsDetails
				title='Library/Frameworks'
				description={description}
				tags={tags}
				animation={animation}
				image='/images/next-js-vs-react.png'
			/>
		</motion.div>
	);
};

export default FrameWorks;
