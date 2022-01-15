import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
			id='skills'
			className='flex flex-col items-center p-2 md:p-0 w-full text-stone-50 h-screen bg-black'
		>
			<motion.div
				animate={animation}
				className='flex flex-col items-center justify-center w-full md:w-4/5 h-full'
			>
				<p className='relative top-4 md:top-0 text-sm md:text-xl md:w-5/6 lg:w-2/5'>
					I'm a life long learner and enjoy learning new stuff! Below are
					programming languages, tools, framworks and libraries that I work
					with. Some of them I control better than the other.
				</p>
				<div className='relative top-8 md:top-14'>
					<Image src={'/HTML_Monochromatic.png'} width={400} height={400} />
				</div>
				<div className='relative bottom-5 md:bottom-0 flex w-full md:w-5/6 lg:w-3/5 justify-between p-4 border-t-2 border-cyan-400'>
					<div className='text-sm md:text-lg space-y-8'>
						<h3>Javascript(ES6)</h3>
						<h3>Typescript</h3>
						<h3>Html 5</h3>
						<h3>Css 3</h3>
					</div>
					<div className='text-sm md:text-lg space-y-8'>
						<h3>Tailwindcss</h3>
						<h3>SASS</h3>
						<h3>Styled Component</h3>
						<h3>Bootstrap</h3>
					</div>
					<div className='text-sm md:text-lg space-y-8'>
						<h3>Nextjs</h3>
						<h3>Material Ui</h3>
						<h3>Git</h3>
						<h3>Vscode</h3>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Skills;
