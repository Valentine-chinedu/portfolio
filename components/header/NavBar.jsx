import React from 'react';

import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';

const NavBar = ({ openSideBar, setOpenSideBar }) => {
	return (
		<>
			<nav
				className={`primary-theme dark:secondary-theme fixed inset-y-0 right-0 flex flex-col items-center justify-center space-y-16 overflow-x-hidden text-lg font-bold md:space-y-20 md:text-xl lg:relative lg:h-10 lg:w-[35rem] lg:flex-row lg:space-x-8 lg:space-y-0 lg:bg-none lg:text-sm   ${
					openSideBar ? 'w-64 md:w-96' : 'w-0'
				} transition-width z-50 h-full text-sm duration-500`}
			>
				<Link href='/'>
					<a
						className=' z-50 cursor-pointer px-2 tracking-wider after:absolute after:bg-fuchsia-600 after:duration-1000 hover:after:transition-[width] dark:after:bg-[#00FFFF] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-12'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Home
					</a>
				</Link>
				<Link href='/Projects'>
					<a
						className='z-50 cursor-pointer px-2 tracking-wider after:absolute after:bg-fuchsia-600 after:duration-1000 hover:after:transition-[width] dark:after:bg-[#00FFFF] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-[4.2rem]'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Projects
					</a>
				</Link>
				<Link href='/Skills'>
					<a
						className='cursor-pointer px-2 tracking-wider after:absolute after:bg-fuchsia-600 after:duration-1000 hover:after:transition-[width] dark:after:bg-[#00FFFF] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-11'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Skills
					</a>
				</Link>
				<Link href='/Blog'>
					<a
						className='cursor-pointer px-2 tracking-wider after:absolute after:bg-fuchsia-600 after:duration-1000 hover:after:transition-[width] dark:after:bg-[#00FFFF] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-10'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Blog
					</a>
				</Link>
				<Link href='/Form'>
					<a
						className='cursor-pointer px-2 tracking-wider after:absolute after:bg-fuchsia-600 after:duration-1000 hover:after:transition-[width] dark:after:bg-[#00FFFF] lg:after:bottom-1 lg:after:block lg:after:h-0.5 lg:after:w-0 lg:hover:after:w-[4rem]'
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
					<VscChromeClose className='text-4xl text-fuchsia-600 dark:text-[#00FFFF] lg:text-5xl' />
				</div>
			) : (
				<div
					onClick={() => {
						setOpenSideBar(true);
					}}
					className='relative left-1 cursor-pointer lg:hidden'
				>
					<AiOutlineMenu className='text-4xl text-fuchsia-600 dark:text-[#00FFFF] lg:text-5xl' />
				</div>
			)}
		</>
	);
};

export default NavBar;
