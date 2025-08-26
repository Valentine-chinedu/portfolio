import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Projects() {
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
				y: 0,
				opacity: 1,
				transition: {
					duration: 1.5,
				},
			});
		}
	}, [inView]);

	return (
		<section
			ref={ref}
			className='h-full w-full border-y border-[#00FFFF] bg-[url("/two-hands-shaking-with-pen-pen-desk.jpg")] bg-cover bg-center'
			id='contact'
		>
			<div className='flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 py-14 lg:py-20'>
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={animation}
					className='flex h-full w-4/5 flex-col items-center justify-center'
				>
					<div className='flex h-full flex-col items-center justify-center'>
						<div className='relative mb-8 flex w-full flex-col items-center'>
							<h2 className='text-5xl font-bold uppercase text-gray-800 md:text-6xl lg:text-9xl'>
								contact
							</h2>
							<h3 className='absolute top-4 text-xl font-bold tracking-wide text-[#00ffff] md:top-5 md:text-2xl lg:top-16 lg:mb-16 lg:text-3xl'>
								Get in touch
							</h3>
						</div>

						<p className='mb-8 text-center text-sm font-medium text-gray-300 lg:mb-16 lg:px-60 lg:text-base'>
							Do you think that I would make a great addition to your team? I
							think so too. I am a young and passionate learner, ready to
							succeed in the tech world. I have a background that has built up
							my collabrative and communication skills. I'm dedicated to
							learning the ins and outs of your tech stack to keep up with high
							standard your users are used to.
						</p>

						<form
							onSubmit={formSubmit}
							className='flex w-full flex-col items-center'
						>
							<div>
								<div>
									<input
										className='input-text'
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
										className='input-text'
										type='email'
										name='email'
										required
										placeholder='Email'
										value={query.email}
										onChange={handleParam()}
									/>
								</div>
								<div className='mb-3 md:mb-5 lg:mb-8'>
									<textarea
										className='textarea-text'
										name='message'
										placeholder='Your message...'
										required
										value={query.message}
										onChange={handleParam()}
										rows='8'
										cols='43'
									/>
								</div>
								<div className='mb-10 flex w-full items-start md:mb-16 lg:mb-12'>
									<button
										className='rounded-md border border-[#00FFFF] px-4 py-2 text-sm font-bold tracking-wider text-gray-300 hover:bg-[#00FFFF] hover:text-gray-700 md:px-6 md:py-3 md:text-base'
										type='submit'
									>
										Send
									</button>
								</div>
							</div>
						</form>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Projects;
