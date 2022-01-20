import { VscChromeClose } from 'react-icons/vsc';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function NavBar({ openSideBar, setOpenSideBar }) {
	return (
		<div className='fixed flex justify-center items-center z-50 lg:z-20 w-full overflow-x-hidden h-[4.5rem] bg-gradient-to-tr from-cyan-900 to-black'>
			<div className='flex justify-between items-center w-11/12 h-full'>
				<Link href='/'>
					<a className='flex '>
						<img
							className='h-8 md:h-10'
							src='/portfolio_logo.png'
							alt='logo'
							loading='lazy'
						/>
					</a>
				</Link>
				<nav
					className={`flex flex-col lg:justify-around items-center justify-center space-y-16 lg:space-y-0 fixed inset-y-0 right-0 lg:relative lg:flex-row bg-gradient-to-tr from-cyan-900 to-black lg:bg-none lg:w-[35rem] overflow-x-hidden ${
						openSideBar ? 'w-80' : 'w-0'
					} h-full text-sm z-50 transition-width duration-500`}
				>
					<Link href='/'>
						<a
							className='px-2 text-stone-50 font-semibold tracking-wider hover:text-stone-200 text-lg z-50'
							onClick={() => {
								setOpenSideBar(false);
							}}
						>
							Home
						</a>
					</Link>
					<AnchorLink offset='50' href='#projects'>
						<a
							className='px-2 text-stone-50 font-semibold tracking-wider hover:text-stone-300 text-lg z-50'
							onClick={() => {
								setOpenSideBar(false);
							}}
						>
							Projects
						</a>
					</AnchorLink>
					<AnchorLink offset='50' href='#skills'>
						<a
							className='px-2 text-stone-50 font-semibold tracking-wider hover:text-stone-300 text-lg'
							onClick={() => {
								setOpenSideBar(false);
							}}
						>
							Skills
						</a>
					</AnchorLink>
					<AnchorLink href='#contact'>
						<a
							className='px-2 text-stone-50 font-semibold tracking-wider hover:text-stone-300 text-lg'
							onClick={() => {
								setOpenSideBar(false);
							}}
						>
							Contact
						</a>
					</AnchorLink>
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
						className='lg:hidden relative left-1 cursor-pointer z-50'
					>
						<VscChromeClose className='text-4xl text-cyan-300' />
					</div>
				) : (
					<div
						onClick={() => {
							setOpenSideBar(true);
						}}
						className='lg:hidden relative left-1 cursor-pointer'
					>
						<AiOutlineMenu className='text-4xl text-cyan-300' />
					</div>
				)}
			</div>
		</div>
	);
}

export default NavBar;