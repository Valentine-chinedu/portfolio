import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useContext, useEffect, useState } from 'react';
import { pageVariantsAnim } from '../../animation';
import GlobalStateContext from '../../contextprovider/Context';

function Intro({ openSideBar }) {
	const { setIsLoaded } = useContext(GlobalStateContext);
	const [show, setShow] = useState(false);
	const { setTheme } = useTheme();

	const line1 = 'welcome to my portfolio.';
	const line2 = "I'm Valentine";
	const line3 = 'A frontend developer.';

	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.08,
			},
		},
	};

	const letter = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
			},
		},
	};

	const variants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 1.25 },
		},
	};

	useEffect(() => {
		const timeOut = setTimeout(() => setIsLoaded(true), 9000);

		return () => clearTimeout(timeOut);
	}, []);
	useEffect(() => {
		const timeOut = setTimeout(() => setShow(true), 2000);

		return () => clearTimeout(timeOut);
	}, []);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='flex h-screen flex-col items-center justify-center space-y-10 overflow-hidden'
		>
			<motion.svg
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, ease: 'easeIn' }}
				className='relative h-24 md:h-36 lg:h-48'
				width='332'
				height='274'
				viewBox='0 0 332 274'
				fill='none'
				s
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* <rect width='332' height='274' fill='#E5E5E5' /> */}
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2 }}
					d='M166.326 16.1886H16V258.651H166.326'
					stroke='#c300ff'
					stroke-width='20'
				/>
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2 }}
					d='M166.326 16.1886H316.653V137.42V258.651H166.326'
					stroke='#00FFFF'
					stroke-width='20'
				/>
				{/* <rect
					x='16'
					y='16.1886'
					width='300.653'
					height='242.462'
					fill='#0a0014'
				/> */}
				<g className='mix-blend-hard-light'>
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 3, delay: 0.5 }}
						d='M166.147 184.761L207.237 45.8817H252.274L184.987 240.025H147.127L79.3026 45.8817H124.519L166.147 184.761Z'
						fill='#00FFFF'
					/>
					<path
						d='M166.147 184.761L163.824 185.457L166.162 193.256L168.472 185.449L166.147 184.761ZM207.237 45.8817V43.457H205.425L204.912 45.1938L207.237 45.8817ZM252.274 45.8817L254.565 46.6757L255.68 43.457H252.274V45.8817ZM184.987 240.025V242.45H186.713L187.278 240.819L184.987 240.025ZM147.127 240.025L144.838 240.825L145.406 242.45H147.127V240.025ZM79.3026 45.8817V43.457H75.8873L77.0137 46.6813L79.3026 45.8817ZM124.519 45.8817L126.842 45.1855L126.324 43.457H124.519V45.8817ZM168.472 185.449L209.562 46.5696L204.912 45.1938L163.822 184.073L168.472 185.449ZM207.237 48.3063H252.274V43.457H207.237V48.3063ZM249.983 45.0877L182.696 239.231L187.278 240.819L254.565 46.6757L249.983 45.0877ZM184.987 237.601H147.127V242.45H184.987V237.601ZM149.416 239.226L81.5916 45.082L77.0137 46.6813L144.838 240.825L149.416 239.226ZM79.3026 48.3063H124.519V43.457H79.3026V48.3063ZM122.197 46.5778L163.824 185.457L168.47 184.065L126.842 45.1855L122.197 46.5778Z'
						fill='black'
					/>
				</g>
			</motion.svg>

			{show && (
				<motion.div
					variants={sentence}
					initial='hidden'
					animate='visible'
					className='flex w-full flex-col items-center justify-center font-serif uppercase'
				>
					<div>
						{line1.split('').map((char, index) => (
							<motion.span
								key={char + '-' + index}
								variants={letter}
								className='text-lg md:text-xl lg:text-2xl'
							>
								{char}
							</motion.span>
						))}
						<br />
						{line2.split('').map((char, index) => (
							<motion.span
								key={char + '-' + index}
								variants={letter}
								className='relative left-14 w-screen text-lg md:left-[4rem] md:text-xl lg:left-20 lg:text-2xl '
							>
								{char}
							</motion.span>
						))}

						<br />
						{line3.split('').map((char, index) => (
							<motion.span
								key={char + '-' + index}
								variants={letter}
								className='relative left-4 text-lg md:text-xl lg:text-2xl'
							>
								{char}
							</motion.span>
						))}
					</div>
				</motion.div>
			)}
		</motion.div>
	);
}

export default Intro;
