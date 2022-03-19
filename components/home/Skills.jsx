import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import FrameWorks from '../skills/FrameWorks';
import Programming from '../skills/Programming';
import ServerState from '../skills/ServerState';
import State from '../skills/State';
import Styling from '../skills/Styling';
import VersionControl from '../skills/VersionControl';

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

	return (
		<div
			ref={ref}
			className='flex h-full w-full flex-col items-center'
			id='skills'
		>
			<h2 className='mb-16 text-lg font-bold uppercase text-gray-600 dark:text-gray-200 md:mb-24 md:text-xl lg:mb-36 lg:text-2xl'>
				Technologies I work with
			</h2>
			<div className='space-y-32 md:space-y-36 lg:space-y-40'>
				<Programming />
				<Styling />
				<FrameWorks />
				<State />
				<ServerState />
				<VersionControl />
			</div>
		</div>
	);
}

export default Skills;
