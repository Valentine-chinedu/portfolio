import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { BsEnvelope, BsGithub } from 'react-icons/bs';

import { ImLinkedin } from 'react-icons/im';
import GlobalStateContext from '../contextprovider/Context';

const Footer = () => {
	const { openSideBar } = useContext(GlobalStateContext);

	return (
		<div
			className={`flex h-48 flex-col items-center justify-center space-y-5 bg-gray-900 py-20 dark:bg-gray-700 md:space-y-8 md:py-28 lg:py-32 ${
				openSideBar && 'blur-sm filter'
			}`}
		>
			<div className='mb-4 space-x-4 text-gray-100 md:space-x-8 md:text-xl'>
				<Link href='/'>
					<a
						className=' z-50 cursor-pointer tracking-wider lg:hover:text-gray-300'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Home
					</a>
				</Link>
				<Link href='/Projects'>
					<a
						className='cursor-pointer tracking-wider lg:hover:text-gray-300'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Projects
					</a>
				</Link>
				<Link href='/Skills'>
					<a
						className='cursor-pointer tracking-wider lg:hover:text-gray-300'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Skills
					</a>
				</Link>
				<Link href='/Blog'>
					<a
						className='cursor-pointer tracking-wider lg:hover:text-gray-300'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Blog
					</a>
				</Link>
				<Link href='/Form'>
					<a
						className='cursor-pointer tracking-wider lg:hover:text-gray-300'
						onClick={() => {
							setOpenSideBar(false);
						}}
					>
						Contact
					</a>
				</Link>
			</div>
			<div className='md flex items-center space-x-8 lg:space-x-10'>
				<a
					href='mailto:valentine11.dev@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsEnvelope className='text-3xl text-gray-300 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-4xl' />
				</a>
				<a
					href='https://www.linkedin.com/in/valentine-chinedu-9bb74b215/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<ImLinkedin className='text-2xl text-gray-300 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-3xl' />
				</a>
				<a
					href='https://github.com/Valentine-chinedu'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsGithub className='text-3xl text-gray-300 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-4xl' />
				</a>
				<a
					className='relative h-8 w-8 md:h-10 md:w-10'
					href='https://valentineokosi.hashnode.dev'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image src='/brand-icon.png' layout='fill' />
				</a>
			</div>
			<h3 className=' text-stone-100 md:text-xl'>
				&copy; 2022 Valentine Okosi Chinedu.
			</h3>
		</div>
	);
};

export default Footer;
