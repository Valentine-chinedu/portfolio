import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillsDetails from './SkillsDetails';

const Programming = () => {
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
		'Javascript being the only scripting language for the web I took my time to become conversant with its basics and confortable working with its advanced features like ES6. I also love working with Typescript as it provides type safety and makes it easy detecting bugs and type errors when working on large projects.';
	const tags = ['Javascript', 'Typescript'];
	return (
		<motion.div ref={ref} className='flex h-full w-full flex-col items-center '>
			<SkillsDetails
				title='Programming'
				description={description}
				tags={tags}
				animation={animation}
				image='/images/js-ts-outside.png'
			/>
		</motion.div>
	);
};

export default Programming;
