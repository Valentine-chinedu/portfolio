import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { pageVariantsAnim } from '../../animation';

function About() {
	// const [ref, inView] = useInView({ threshold: 0.2 });
	// const animation = useAnimation();

	// useEffect(() => {
	// 	if (inView) {
	// 		animation.start({
	// 			x: 0,
	// 			opacity: 1,
	// 			transition: {
	// 				duration: 1.25,
	// 				delay: 0.5,
	// 			},
	// 		});
	// 	}
	// 	if (!inView) {
	// 		animation.start({ x: -100, opacity: 0 });
	// 	}
	// }, [inView]);
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='flex h-screen w-full flex-col items-center pt-20 md:justify-center md:px-12 lg:container lg:mx-auto lg:flex lg:flex-row lg:space-x-8 lg:px-80'
		>
			<div className='flex h-full w-full flex-col items-center justify-center  md:w-4/5'>
				<div className='relative mb-8 flex w-full flex-col items-center justify-center space-y-4 text-2xl md:mb-16 md:text-3xl lg:justify-start'>
					<h3 className='uppercas mb-4 text-xl font-extrabold text-stone-700 dark:text-blue-50 md:mb-16 md:text-3xl'>
						About Me
					</h3>
					<div className='relative h-52 w-52 rounded-full md:h-72 md:w-72'>
						<Image
							className=' rounded-full'
							src='/me.jpg'
							alt='profile picture'
							layout='fill'
						/>
					</div>
				</div>

				<div className=' flex flex-col items-center space-y-2 px-6 font-medium md:text-lg lg:mr-4 '>
					<p>
						I'm Valentine Okosi, A Frontend developer who is passionate about
						being creative and developing web apps that positively impact
						people's lives.
					</p>
					<p>
						I enjoy being creative, using code as a way to express myself. I
						strive to develope visually appealing designs with user exprience
						always the focus.
					</p>
					<p>
						Currently, I am available for a suitable frontend engineering
						position, with opportunities for continuous learning.
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
