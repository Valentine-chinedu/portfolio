import { useContext, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
// import { Link, animateScroll as scroll } from 'react-scroll';
import GlobalStateContext from '../contextprovider/Context';
import { pageVariantsAnim } from '../animation';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FaCircle } from 'react-icons/fa';

function NavBar() {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);
	const { theme, setTheme } = useTheme();
	const [toggledTheme, setToggledTheme] = useState(false);

	if (!toggledTheme) {
		setTheme('dark');
	} else {
		setTheme('light');
	}

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='fixed z-50 flex h-[3rem] w-full items-center justify-center overflow-x-hidden bg-amber-50 shadow-md dark:bg-[#050514] md:h-[4rem] lg:z-20'
		>
			<div className='flex h-full w-11/12 items-center justify-between'>
				<Link href='/'>
					<svg
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, ease: 'easeIn' }}
						className=' h-10 w-10 cursor-pointer md:h-12 md:w-12 lg:h-14 lg:w-14'
						width='332'
						height='274'
						viewBox='0 0 332 274'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 2 }}
							d='M166.326 16.1886H16V258.651H166.326'
							stroke='#911fc5'
							stroke-opacity='0.89'
							stroke-width='20'
						/>
						<path
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 2 }}
							d='M166.326 16.1886H316.653V137.42V258.651H166.326'
							stroke='#00FFFF'
							stroke-width='20'
						/>

						<g className='mix-blend-hard-light'>
							<path
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
					</svg>
				</Link>
				<div className='flex items-center space-x-2 md:space-x-4'>
					<div className='flex items-center '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 text-amber-50 md:h-6 md:w-6 lg:h-7 lg:w-7'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								p
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
							/>
						</svg>

						<div
							className={`mx-1 flex w-12 md:w-14 ${
								theme === 'light' ? 'justify-start' : 'justify-end'
							} rounded-3xl border border-cyan-400 transition-all duration-1000`}
						>
							<button onClick={() => setToggledTheme((prev) => !prev)}>
								<FaCircle className='text-sm lg:text-base' />
							</button>
						</div>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4 text-black md:h-5 md:w-5 lg:h-6 lg:w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
							/>
						</svg>
					</div>

					<nav
						className={`primary-theme dark:secondary-theme fixed inset-y-0 right-0 flex flex-col items-center justify-center space-y-16 overflow-x-hidden text-lg font-bold md:space-y-20  md:text-xl lg:relative lg:h-10 lg:w-[35rem] lg:flex-row lg:justify-around lg:space-y-0 lg:bg-none   ${
							openSideBar ? 'w-64 md:w-96' : 'w-0'
						} transition-width z-50 h-full text-sm duration-500`}
					>
						<Link href='/'>
							<a
								className=' z-50 cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-[0.14rem] lg:after:w-0 lg:hover:after:w-16'
								onClick={() => {
									setOpenSideBar(false);
								}}
							>
								Home
							</a>
						</Link>
						<Link href='/Projects'>
							<a
								className='z-50 cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-[0.14rem] lg:after:w-0 lg:hover:after:w-[5.2rem]'
								onClick={() => {
									setOpenSideBar(false);
								}}
							>
								Projects
							</a>
						</Link>
						<Link href='/Skills'>
							<a
								className='cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-[0.14rem] lg:after:w-0 lg:hover:after:w-14'
								onClick={() => {
									setOpenSideBar(false);
								}}
							>
								Skills
							</a>
						</Link>
						<Link href='/Blog'>
							<a
								className='cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-[0.14rem] lg:after:w-0 lg:hover:after:w-12'
								onClick={() => {
									setOpenSideBar(false);
								}}
							>
								Blog
							</a>
						</Link>
						<Link href='/Form'>
							<a
								className='cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-[0.14rem] lg:after:w-0 lg:hover:after:w-[5rem]'
								onClick={() => {
									setOpenSideBar(false);
								}}
							>
								Contact
							</a>
						</Link>
						{/* <div className='flex items-center'>
								<a
									href='/valentine_okosi_resume'
									target='_blank'
									className=' border-solid border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:bg-opacity-20 rounded px-4 py-2 font-semibold focus:outline-none'
								>
									Resume
								</a>
							</div> */}
					</nav>
					{openSideBar ? (
						<div
							onClick={() => {
								setOpenSideBar(false);
							}}
							className='relative left-1 z-50 cursor-pointer lg:hidden'
						>
							<VscChromeClose className='text-4xl text-cyan-400 lg:text-5xl' />
						</div>
					) : (
						<div
							onClick={() => {
								setOpenSideBar(true);
							}}
							className='relative left-1 cursor-pointer lg:hidden'
						>
							<AiOutlineMenu className='text-4xl text-cyan-400 lg:text-5xl' />
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
}

export default NavBar;
