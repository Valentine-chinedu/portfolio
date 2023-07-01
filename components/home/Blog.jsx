import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-grid-carousel';

function Blog({ articles }) {
	const [ref, inView] = useInView({ threshold: 0.3 });
	const animation = useAnimation();

	function formattedDate(date) {
		const newDate = new Date(date);
		const formatted = newDate.toLocaleDateString('en-US', {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric',
		});
		return formatted;
	}

	console.log(articles);

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
			className='flex h-screen w-full flex-col items-center justify-center bg-[url("/blog_background_4.png")] bg-cover bg-right'
			id='blog'
		>
			<motion.div
				animate={animation}
				initial={{ y: 100, opacity: 0 }}
				className='flex w-[90%] flex-col items-center justify-center py-8 md:w-4/5 md:py-12 lg:w-4/6 lg:space-y-6 lg:py-14'
			>
				<div className='relative mb-4 flex w-full flex-col items-center'>
					<h2 className='text-6xl font-bold uppercase text-gray-800 md:text-7xl lg:text-9xl'>
						Blog
					</h2>
					<h3 className='absolute top-6 text-lg font-bold tracking-wider text-[#00ffff] md:top-8 md:text-xl lg:top-16 lg:mb-16 lg:text-3xl'>
						Technical Writing
					</h3>
				</div>
				<p className=' mb-10 text-center font-medium text-gray-100 md:text-lg lg:w-4/5 lg:px-0 lg:pb-14 '>
					I occussionally write about the technologies that I work with. It
					helps me reinforce, retain and share Knowledge.
				</p>
				<div className='w-screen pl-4 md:container md:mx-auto '>
					<Carousel
						responsiveLayout={[
							{
								breakpoint: 767,
								cols: 1,
								rows: 1,
								gap: 20,
								loop: true,
							},

							{
								breakpoint: 768,
								cols: 2,
								rows: 1,
								gap: 4,
								loop: true,
							},
							{},
						]}
						cols={3}
						rows={1}
						gap={4}
						showDots={true}
						dotColorActive={'#ffff'}
						dotColorInactive={'#0a0a0a'}
						loop={true}
					>
						{articles?.map((article) => (
							<Carousel.Item id={article._id}>
								<div className='mb-8 flex h-96 w-80 flex-col overflow-hidden border-4 border-[#00FFFF] bg-black md:w-64 lg:w-72'>
									<a
										className='mb-4'
										href={`https://valentineokosi.hashnode.dev/${article.slug}`}
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='relative h-60 w-auto '>
											<Image
												src={article.coverImage}
												alt='profile picture'
												layout='fill'
												className=''
											/>
										</div>
									</a>
									<div className='space-y-16 px-4 text-xs'>
										<h2 className=' text-center text-gray-100'>
											{article.title}
										</h2>
										<div className='flex w-full justify-between'>
											<p className='text-gray-400 '>
												{formattedDate(article.dateAdded)}
											</p>
											<a
												href={`https://valentineokosi.hashnode.dev/${article.slug}`}
												target='_blank'
												rel='noopener noreferrer'
												className='text-[#00FFFF] hover:text-cyan-500'
											>
												Read
											</a>
										</div>
									</div>
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</motion.div>
		</div>
	);
}

export default Blog;
