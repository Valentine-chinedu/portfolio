import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
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
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.25,
				},
			});
		}
		if (!inView) {
			animation.start({ x: -100, opacity: 0 });
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className=' flex h-full w-full flex-col items-center'
			id='contact'
		>
			<div className='flex h-full w-4/5 flex-col items-center justify-between'>
				<div className='flex h-full flex-col items-center justify-center'>
					<h1 className='mb-16 text-lg font-bold uppercase text-gray-800 dark:text-gray-100 md:text-xl lg:mb-20 lg:text-2xl'>
						Get In Touch
					</h1>

					<p className='mb-8 font-medium text-gray-800 dark:text-gray-300 md:mb-12 md:text-lg lg:mb-16 lg:w-4/6 lg:text-xl'>
						Do you think that I would make a great addition to your team? I
						think so too. I am a young and passionate learner, ready to succeed
						in the tech world. I have a background that has built up my
						collabrative and communication skills. I'm dedicated to learning the
						ins and outs of your tech stack to keep up with high standard your
						users are used to.
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
									className='rounded-md border border-gray-600 px-2 py-2 text-sm font-bold tracking-wider hover:bg-fuchsia-500 dark:border-[#00FFFF] dark:hover:bg-[#00FFFF] dark:hover:text-gray-600 md:px-4 lg:text-base '
									type='submit'
								>
									Send Message
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Projects;
