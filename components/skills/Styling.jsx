import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillsDetails from './SkillsDetails';

const Styling = () => {
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
		'I am quite confortable with HTML5 and CSS3. Although I have learnt and worked with CSS frameworks like Bootstrap and materialize CSS, I prefer writing my own CSS using tailwind CSS because of its utility based classes and Styled Components because of its components level styling when working with Reactjs. For animation, I do minor animations with CSS animation but for more advanced animation I use Framer-motion.';
	const tags = [
		'HTML5',
		'CSS3',
		'Boostrap',
		'Materialize CSS',
		'Tailwind CSS',
		'StyledComponent',
		'FramerMotion',
	];

	return (
		<motion.div ref={ref} className='flex h-full w-full flex-col items-center '>
			<SkillsDetails
				title='Markup/Styling'
				description={description}
				tags={tags}
				animation={animation}
				image='/images/htm-css.png'
			/>
		</motion.div>
	);
};

export default Styling;
