import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// import HomeDetails from './HomeDetails';

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

	return (
		<div
			ref={ref}
			className='flex h-full w-full flex-col items-center md:p-0'
			id='blog'
		>
			<motion.div
				animate={animation}
				className='flex w-[90%] flex-col items-center justify-center md:w-4/5 md:py-10 lg:w-4/6 lg:py-14'
			>
				<div className='flex w-full justify-center'>
					<h2 className='font-bold uppercase text-gray-600 dark:text-gray-200 md:text-xl lg:mb-16 lg:text-2xl'>
						technical Blog
					</h2>
				</div>
				<div className='relative h-80 w-80 md:h-96 md:w-96'>
					<Image src='/illustra/news.png' alt='profile picture' layout='fill' />
				</div>
				<p className='mb-8 px-4 text-sm font-medium md:text-lg lg:w-4/5 lg:px-0 lg:text-base'>
					I occussionally write about the technologies that I have learnt. It
					helps me reinforce, retain and share Knowledge, improve my ability to
					talk about technologies. If I can write about them, I can talk about
					them.
				</p>
				<a
					className='rounded-md border-2 border-fuchsia-600 px-8 py-2 text-sm font-bold tracking-wider hover:bg-fuchsia-500 hover:text-gray-200 dark:border-[#00FFFF] dark:text-gray-200 dark:hover:bg-[#00FFFF] dark:hover:text-gray-600 md:text-xl'
					href='https://valentineokosi.hashnode.dev'
					target='_blank'
					rel='noopener noreferrer'
				>
					View Blog
				</a>
				{/* <Button link={link} name={name} /> */}
			</motion.div>
		</div>
	);
}

export default Blog;
