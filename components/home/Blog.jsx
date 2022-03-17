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
		<div ref={ref} className='flex h-full w-full flex-col items-center md:p-0'>
			<motion.div
				animate={animation}
				className='flex w-[90%] flex-col items-center justify-center  md:w-4/5 md:py-10 lg:w-4/6 lg:py-14'
			>
				<div className='flex w-full items-center justify-center space-x-2 md:space-x-4 lg:space-x-8'>
					<span className='h-0.5 w-20 bg-fuchsia-600 dark:bg-[#00FFFF] md:w-40 lg:w-60'></span>
					<h2 className='font-bold uppercase text-fuchsia-600 dark:text-[#00FFFF] md:text-xl'>
						Blog
					</h2>
					<span className='h-0.5 w-20 bg-fuchsia-600 dark:bg-[#00FFFF] md:w-40 lg:w-60'></span>
				</div>
				<div className='relative h-80 w-80 md:h-96 md:w-96'>
					<Image src='/illustra/news.png' alt='profile picture' layout='fill' />
				</div>
				<p className='mb-8 px-8 font-medium md:text-lg lg:w-4/5 lg:text-lg'>
					I occussionally write about the technical things that I have learnt.
					It helps me reinforce, retain and share Knowledge, improve my ability
					to talk about technologies. If I can write about them, I can talk
					about them.
				</p>
				<a
					className='border-stone-70 dark:text-gray-10 rounded-md border-2 border-fuchsia-600 px-8 py-2 font-bold tracking-wider hover:bg-fuchsia-500 hover:text-gray-50 dark:border-[#00FFFF] dark:hover:bg-[#00FFFF] dark:hover:text-gray-800 md:text-xl'
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
