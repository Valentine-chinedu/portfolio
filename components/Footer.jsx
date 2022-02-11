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
			className={`flex flex-col bg-gray-900 px-8 pt-8 pb-2 md:h-64 md:px-12 md:pb-4 lg:h-72 lg:pb-8 ${
				openSideBar && 'blur-sm filter'
			}`}
		>
			<div className='mb-10 flex h-full flex-col items-center justify-center'>
				<h1 className='mb-2 text-stone-50 md:mb-6 md:text-xl'>
					Subscribe to my newsletter
				</h1>

				<form onSubmit={formSubmit} className=''>
					<div className=' flex w-72 items-center justify-between rounded-md border border-cyan-500 py-2 px-2 md:w-96 md:py-3 md:px-4'>
						<FiSend className='text-lg text-stone-100 md:text-2xl' />
						<input
							className='h-full w-[10rem] bg-gray-900 text-sm text-stone-100 focus:opacity-100 focus:outline-none md:w-[14rem] md:text-lg '
							type='email'
							name='email'
							placeholder='Email address'
							value={query.email}
							onChange={handleParam()}
						/>
						<button
							className='text-sm font-semibold uppercase text-cyan-500 md:text-lg'
							type='submit'
						>
							Subscribe
						</button>
					</div>
				</form>
			</div>

			<div className='flex h-full items-end justify-between lg:justify-around'>
				<h3 className='text-sm text-stone-100 md:text-lg'>
					&copy;2022 Valentine Okosi C.
				</h3>
				<div className='flex items-center space-x-4 md:space-x-6 lg:space-x-10'>
					<a
						href='mailto:valentine.chinedu@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsEnvelope className='text-xl text-gray-300 hover:text-cyan-300 md:text-3xl' />
					</a>
					<a
						href='https://www.linkedin.com/in/valentine-chinedu-9bb74b215/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ImLinkedin className='text-lg text-blue-700 hover:text-cyan-300 md:text-3xl' />
					</a>
					<a
						href='https://github.com/Valentine-chinedu'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsGithub className='text-xl text-gray-300 hover:text-cyan-300 md:text-3xl' />
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
