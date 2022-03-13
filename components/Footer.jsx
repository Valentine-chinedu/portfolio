import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { BsEnvelope, BsGithub } from 'react-icons/bs';

import { FiSend } from 'react-icons/fi';
import { ImLinkedin } from 'react-icons/im';
import GlobalStateContext from '../contextprovider/Context';

const Footer = () => {
	const { openSideBar } = useContext(GlobalStateContext);
	const [query, setQuery] = useState({
		email: '',
	});

	// Update inputs value
	const handleParam = () => (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setQuery((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	// Form submit function
	const formSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		Object.entries(query).forEach(([key, value]) => {
			formData.append(key, value);
		});
		fetch('https://getform.io/f/1123de77-c137-4b78-a48e-1d5745223d28', {
			method: 'POST',
			body: formData,
		}).then(() => setQuery({ email: '' }));
	};
	return (
		<div
			className={`flex flex-col bg-gray-900 px-8 pt-4 pb-2 md:h-56 md:px-12 md:pb-4 lg:h-60 lg:py-8 ${
				openSideBar && 'blur-sm filter'
			}`}
		>
			<div className='mb-4 flex flex-col items-center'></div>

			<div className='flex h-full w-full items-end justify-center space-x-8 md:space-x-28 lg:space-x-40'>
				<h3 className='text-xs text-stone-100 md:text-lg'>
					&copy; 2022 Valentine Okosi C.
				</h3>
				<div className='flex items-center space-x-3 md:space-x-6 lg:space-x-10'>
					<a
						href='mailto:valentine11.dev@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsEnvelope className='text-xl text-gray-300 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-3xl' />
					</a>
					<a
						href='https://www.linkedin.com/in/valentine-chinedu-9bb74b215/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ImLinkedin className='text-lg text-gray-300 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-3xl' />
					</a>
					<a
						href='https://github.com/Valentine-chinedu'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsGithub className='text-xl text-gray-300 hover:text-fuchsia-500 dark:hover:text-[#00FFFF] md:text-3xl' />
					</a>
					<a
						className='relative h-5 w-5 md:h-7 md:w-7'
						href='valentineokosi.hashnode.dev'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src='/brand-icon.png' layout='fill' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
