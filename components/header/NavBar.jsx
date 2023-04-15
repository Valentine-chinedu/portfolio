import { AiOutlineMenu } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';

import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = ({ openSideBar, setOpenSideBar }) => {
	return (
		<>
			<nav
				className={` fixed inset-y-0 right-0 flex flex-col items-center justify-center space-y-16 overflow-x-hidden bg-slate-900 text-lg font-bold text-gray-50/80 md:space-y-20 md:text-xl lg:relative lg:h-10 lg:w-[35rem] lg:flex-row lg:space-x-8 lg:space-y-0 lg:bg-[#010e03] lg:bg-opacity-5  lg:text-sm ${
					openSideBar ? 'w-64 md:w-96' : 'w-0'
				} z-50 h-full text-sm transition-[width] duration-500`}
			>
				<AnchorLink
					href='#home'
					offset={() => 100}
					className='z-50 cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:text-gray-100 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-12'
					onClick={() => {
						setOpenSideBar(false);
					}}
				>
					Home
				</AnchorLink>
				<AnchorLink
					href='#projects'
					className='z-50 cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:text-gray-100 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-[4.2rem]'
					onClick={() => {
						setOpenSideBar(false);
					}}
				>
					Projects
				</AnchorLink>
				<AnchorLink
					href='#about'
					className=' z-50 cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:text-gray-100 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-12'
					onClick={() => {
						setOpenSideBar(false);
					}}
				>
					About
				</AnchorLink>
				<AnchorLink
					href='#skills'
					className='cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:text-gray-100 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-11'
					onClick={() => {
						setOpenSideBar(false);
					}}
				>
					Skills
				</AnchorLink>
				<AnchorLink
					href='#contact'
					className='cursor-pointer px-2 tracking-wider after:absolute after:bg-[#00FFFF] after:duration-1000 hover:text-gray-100 hover:after:transition-[width] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-11'
					onClick={() => {
						setOpenSideBar(false);
					}}
				>
					Contact
				</AnchorLink>
			</nav>
			{openSideBar ? (
				<div
					onClick={() => {
						setOpenSideBar(false);
					}}
					className='relative left-1 z-50 cursor-pointer lg:hidden'
				>
					<VscChromeClose className='text text-2xl text-[#00FFFF] md:text-3xl lg:text-5xl' />
				</div>
			) : (
				<div
					onClick={() => {
						setOpenSideBar(true);
					}}
					className='relative left-1 cursor-pointer lg:hidden'
				>
					<AiOutlineMenu className='text-2xl text-[#00FFFF] md:text-3xl lg:text-5xl' />
				</div>
			)}
		</>
	);
};

export default NavBar;
