import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// import HomeDetails from './HomeDetails';

function Blog() {
	const [ref, inView] = useInView({ threshold: 0.3 });
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 0,
				opacity: 1,
				transition: {
					duration: 1.5,
				},
			});
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className='flex h-screen w-full flex-col items-center justify-center bg-emerald-600 dark:bg-neutral-900'
			id='blog'
		>
			<motion.div
				animate={animation}
				initial={{ y: 100, opacity: 0 }}
				className='flex w-[90%] flex-col items-center justify-center py-8 md:w-4/5 md:py-12 lg:w-4/6 lg:py-14'
			>
				<div className='relative flex w-full flex-col items-center'>
					<h2 className='text-6xl font-bold uppercase text-emerald-500 dark:text-gray-800 md:text-7xl lg:text-9xl'>
						Blog
					</h2>
					<h3 className='absolute top-6 text-lg font-bold tracking-wider text-fuchsia-400 dark:text-[#00ffff] md:top-8 md:text-xl lg:top-16 lg:mb-16 lg:text-3xl'>
						Technical Writing
					</h3>
				</div>
				<div className='relative h-80 w-80 md:h-96 md:w-96'>
					<Image src='/illustra/news.png' alt='profile picture' layout='fill' />
				</div>
				<p className=' mb-8 text-center font-medium text-gray-100 md:text-lg lg:w-4/5 lg:px-0 '>
					I occussionally write about the technologies that I have learnt. It
					helps me reinforce, retain and share Knowledge, improve my ability to
					talk about technologies. If I can write about them, I can talk about
					them.
				</p>
				<a
					className='rounded-md border-2 border-fuchsia-600 px-4 py-2 text-sm font-bold tracking-wider text-gray-100 hover:bg-fuchsia-500 dark:border-[#00FFFF] dark:text-gray-100 dark:hover:bg-[#00FFFF] dark:hover:text-gray-600 md:px-8 md:text-xl'
					href='https://valentineokosi.hashnode.dev'
					target='_blank'
					rel='noopener noreferrer'
				>
					View Blog
				</a>
			</motion.div>
		</div>
	);
}

export default Blog;
