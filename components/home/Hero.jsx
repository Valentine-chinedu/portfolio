import React from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { pageVariantsAnim } from '../../animation';
import { BsEnvelope, BsGithub } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';

const HeroSection = () => {
	return (
		<section
			className='flex h-screen w-screen flex-col items-center justify-center space-y-20 bg-[url("/landing_page_background.jpg")] bg-right px-8 pt-16 md:px-12 lg:space-y-24 lg:bg-cover lg:px-0 lg:pt-20 '
			id='home'
		>
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 2, ease: 'easeIn', delay: 0.5 }}
				className=' flex flex-col items-center space-y-6 md:space-y-8 lg:w-full lg:items-start lg:justify-center lg:pl-56'
			>
				<h1 className='bg-gradient-to-r from-cyan-200 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-7xl'>
					Chinedu V. Okosi.
				</h1>
				<p className='text-center text-sm font-medium text-gray-100 md:text-lg lg:w-[40rem] lg:text-left '>
					Greetings! I'm a Fullstack Software Developer with 2.5 years of
					professional experience, specializing in frontend development. I hold
					a strong foundation in Computer Science and focus on crafting fast,
					scalable, and user-friendly web interfaces using modern technologies.
				</p>

				<div className='flex w-64 flex-col justify-center space-y-4 overflow-hidden lg:justify-start'>
					<div className=' items-center justify-center '>
						<p className='text-sm text-gray-300 md:text-base'>
							Frontend Development
						</p>
						<motion.div
							animate={{ x: 0 }}
							initial={{ x: -300 }}
							transition={{ duration: 2, ease: 'easeIn', delay: 1 }}
							className=' z-10 h-1 w-full bg-[#00FFFF] text-center text-xs text-gray-900'
						></motion.div>
					</div>
					<div className='items-center justify-center'>
						<p className='text-sm text-gray-300 md:text-base'>
							Backend Development
						</p>
						<motion.div
							animate={{ x: 0 }}
							initial={{ x: -300 }}
							transition={{ duration: 2, ease: 'easeIn', delay: 1 }}
							className=' h-1 w-full bg-[#00FFFF] text-center text-xs text-gray-900'
						></motion.div>
					</div>
					<div className=' items-center justify-center'>
						<p className='text-sm text-gray-300 md:text-base'>SEO</p>
						<motion.div
							animate={{ x: 0 }}
							initial={{ x: -300 }}
							transition={{ duration: 2, ease: 'easeIn', delay: 1 }}
							className='h-1 w-full bg-[#00FFFF] text-center text-xs text-gray-900'
						></motion.div>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 300 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 2, ease: 'easeIn', delay: 0.5 }}
				className='flex w-full flex-col items-center justify-center space-y-10 lg:space-y-8'
			>
				<div className='flex  w-full items-center justify-center space-x-4 md:space-x-6 lg:space-x-8'>
					<AnchorLink href='#contact'>
						<a className='md:p-o rounded-lg bg-[#1fd8d8] px-3 py-2 text-sm font-bold text-gray-900 hover:bg-[#00FFFF] md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg'>
							Get In Touch
						</a>
					</AnchorLink>
					<AnchorLink
						href='#projects'
						className='hover:text-100 rounded-lg bg-gray-100 px-3 py-2 text-sm font-bold text-gray-900 hover:bg-[#00FFFF] hover:text-gray-800 md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg'
					>
						Projects
					</AnchorLink>
				</div>
				<div className='flex items-center space-x-8 pb-4 lg:space-x-10 lg:pb-8'>
					<a
						href='mailto:chineduokosi.dev@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsEnvelope className='text-3xl text-[#00FFFF] hover:text-[#14caca] md:text-4xl' />
					</a>
					{/* <a
						className='relative h-6 w-6 md:h-8 md:w-8'
						href='https://www.behance.net/valentichinedu'
						target='_blank'
						rel='noopener noreferrer'
					>
						<svg
							className='fill-[#00FFFF] text-3xl hover:fill-[#14caca] '
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
						>
							<title>Beha</title>
							<path d='M8.228 15.01h-2.228v-2.01h2.261c1.878 0 2.003 2.01-.033 2.01zm6.758-2.677h3.018c-.117-1.715-2.73-1.977-3.018 0zm-6.804-3.333h-2.182v2h2.389c1.673 0 1.937-2-.207-2zm15.818-4v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5zm-10 3h5v-1h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604h-4.635v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.528-2.95-3.583-2.95-2.094 0-3.352 1.34-3.352 3.947 0 2.631 1.367 3.783 3.416 3.783s3.106-1.135 3.4-2h-2.111c-.736.855-2.893.521-2.767-1.353h5.06c.01-.634-.012-1.089-.063-1.427z' />
						</svg>
					</a> */}
					<a
						href='https://linkedin.com/in/chineduokosi'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ImLinkedin className='text-2xl text-[#00FFFF] hover:text-[#14caca] md:text-3xl' />
					</a>
					<a
						href='https://github.com/Valentine-chinedu'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsGithub className='text-3xl text-[#00FFFF] hover:text-[#14caca] md:text-4xl' />
					</a>
					<a
						className='relative h-8 w-8 md:h-10 md:w-10'
						href='https://chineduokosi.hashnode.dev'
						target='_blank'
						rel='noopener noreferrer'
					>
						<svg
							className='fill-[#00FFFF] text-3xl hover:fill-[#14caca] md:text-4xl'
							viewBox='0 0 256 256'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsxlink='http://www.w3.org/1999/xlink'
						>
							<g fill-rule='evenodd'>
								<path d='M17.5913461,85.5328619 C-5.86378203,108.98799 -5.86378203,147.01185 17.5913461,170.464766 L85.5337714,238.409404 C108.9889,261.862319 147.01276,261.862319 170.465675,238.409404 L238.410313,170.464766 C261.863229,147.009638 261.863229,108.985777 238.410313,85.5328619 L170.465675,17.5904365 C147.010547,-5.86247884 108.986687,-5.86247884 85.5337714,17.5904365 L17.5913461,85.5328619 Z M157.724673,157.725976 C174.143262,141.307386 174.143262,114.690241 157.724673,98.2738645 C141.308296,81.8552748 114.691151,81.8552748 98.274774,98.2738645 C81.8561843,114.692454 81.8561843,141.307386 98.274774,157.725976 C114.693364,174.142353 141.308296,174.142353 157.726886,157.725976 L157.724673,157.725976 Z'></path>
							</g>
						</svg>
					</a>
				</div>
				<svg
					className='h-6 animate-bounce md:h-8'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
				>
					<path fill='none' d='M0 0h24v24H0z' />
					<path
						d='M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z'
						fill='rgba(60,231,213,1)'
					/>
				</svg>
			</motion.div>
		</section>
	);
};

export default HeroSection;
