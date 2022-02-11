import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillsDetails from './SkillsDetails';

const VersionControl = () => {
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
		'Git and GitHub is my combo for version controll. I am well conversant with git commmands when working with git locally and I use GitHub for remote hosting.';
	const tags = ['Git', 'Github'];

	return (
		<motion.div
			ref={ref}
			className='justify-cente flex w-full flex-col items-center'
		>
			<SkillsDetails
				title='Version Control'
				description={description}
				tags={tags}
				animation={animation}
				image='/images/git-github.png'
			/>
		</motion.div>
	);
};

export default VersionControl;
