import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { useInView } from 'react-intersection-observer';

function Contact() {
	const [ref, inView] = useInView({ threshold: 0.3 });
	const animation = useAnimation();

	const [query, setQuery] = useState({
		name: '',
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
		}).then(() => setQuery({ name: '', email: '', message: '' }));
	};

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.25,
				},
			});
		}
		if (!inView) {
			animation.start({ x: 100, opacity: 0 });
		}
	}, [inView]);
	return (
		<div
			ref={ref}
			id='contact'
			className='flex flex-col items-center h-screen w-screen bg-[url(/ron-whitaker-mVuKCYMGZBM-unsplash.jpg)]'
		>
			<motion.div
				animate={animation}
				className='flex flex-col items-center justify-center h-full w-4/5'
			>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-stone-50'>
					Get In Touch
				</h1>

				<form
					onSubmit={formSubmit}
					className='w-full flex flex-col items-center'
				>
					<div>
						<div className=''>
							<input
								className='text-stone-50 focus:text-gray-700 text-sm md:text-lg w-[21rem] md:w-[38rem] lg:w-[50rem] h-10 md:h-14 pl-2 lg:pl-8 border-2 border-stone-50 rounded-md focus:opacity-100 opacity-60 mb-4 bg-gray-900 focus:bg-gray-100 focus:outline-none'
								type='text'
								name='name'
								required
								placeholder='Your name'
								value={query.name}
								onChange={handleParam()}
							/>
						</div>
						<div>
							<input
								className='text-stone-50 focus:text-gray-700 text-sm md:text-lg w-[21rem] md:w-[38rem] lg:w-[50rem] h-10 md:h-14 pl-2 lg:pl-8 border-2 border-stone-50 rounded-md opacity-60 focus:opacity-100 bg-gray-900 focus:bg-gray-100 mb-4 focus:outline-none'
								type='email'
								name='email'
								placeholder='Email'
								value={query.email}
								onChange={handleParam()}
							/>
						</div>
						<div className='mb-3 md:mb-5 lg:mb-8'>
							<textarea
								className='text-stone-50 focus:text-gray-700 text-sm md:text-lg border-2 border-stone-50 rounded-md w-[21rem] md:w-[38rem] lg:w-[50rem] pt-2 opacity-60 focus:opacity-100 bg-gray-900 focus:bg-gray-100 pl-2 lg:pl-8 lg:pt-4 focus:outline-none'
								name='message'
								placeholder='Your message...'
								required
								value={query.message}
								onChange={handleParam()}
								rows='8'
								cols='43'
							/>
						</div>
						<div className='flex w-full items-start mb-10 md:mb-16 lg:mb-12'>
							<button
								className=' bg-gradient-to-tr from-cyan-700 to-cyan-400 hover:shadow-cyan-300 shadow-lg py-2 px-2 text-sm md:text-lg border-2 rounded-md text-[#00ffff]'
								type='submit'
							>
								Send Message
							</button>
						</div>
					</div>
				</form>
				<div className='flex relative top-16 md:top-32 lg:top-20 items-center justify-center space-x-8 md:space-x-16 w-3/5'>
					<a
						href='mailto:valentine.chinedu@gmail.com'
						className=' md:text-lg tracking-wide text-stone-50 hover:text-cyan-500 '
					>
						valentine11.dev@gmail.com
					</a>
					<div className='flex space-x-6'>
						<a
							href='https://www.linkedin.com/in/valentine-chinedu-9bb74b215/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ImLinkedin className='text-2xl md:text-3xl text-cyan-500 hover:text-cyan-300' />
						</a>
						<a
							href='https://github.com/Valentine-chinedu'
							target='_blank'
							rel='noopener noreferrer'
						>
							<BsGithub className='text-2xl md:text-3xl text-cyan-500 hover:text-cyan-300' />
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Contact;
