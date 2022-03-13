import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import HomeDetails from './HomeDetails';

function Blog() {
	const [ref, inView] = useInView({ threshold: 0.2 });
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
		'I occussionally write about the technical things that I have learnt. It helps me reinforce, retain and share Knowledge, improve my ability to talk about technologies. If I can write about them, I can talk about them.';

	return (
		<div ref={ref} className='flex h-full w-full flex-col items-center md:p-0'>
			<HomeDetails
				animation={animation}
				title='Technical Blog'
				image='/illustra/news.png'
				details={details}
				link='/Blog'
				as='/blog'
				name='View Articles'
			/>
		</div>
	);
}

export default Blog;
