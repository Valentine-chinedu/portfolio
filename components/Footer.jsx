import Image from 'next/image';

import { useContext } from 'react';
import { BsEnvelope, BsGithub } from 'react-icons/bs';

import { ImLinkedin } from 'react-icons/im';
import GlobalStateContext from '../contextprovider/Context';

const Footer = () => {
	const { openSideBar } = useContext(GlobalStateContext);

	return (
		<div
			className={`primary-theme dark:secondary-theme flex h-44 flex-col items-center justify-center space-y-5 pt-20 pb-10 md:space-y-8 md:py-28 lg:py-32 ${
				openSideBar && 'blur-sm filter'
			}`}
		>
			<div className='md flex items-center space-x-8  lg:space-x-10'>
				<a
					href='mailto:valentine11.dev@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsEnvelope className='text-3xl text-gray-500 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-4xl' />
				</a>
				<a
					href='https://linkedin.com/in/valentine-okosi'
					target='_blank'
					rel='noopener noreferrer'
				>
					<ImLinkedin className='text-2xl text-gray-500 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-3xl' />
				</a>
				<a
					href='https://github.com/Valentine-chinedu'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BsGithub className='text-3xl text-gray-500 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-4xl' />
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
			<h3 className=' text-sm font-medium text-gray-700 dark:text-gray-300 md:text-base'>
				&copy; 2022 Chinedu Valentine Okosi.
			</h3>
		</div>
	);
};

export default Footer;
