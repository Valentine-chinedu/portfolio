import React, { useState } from "react";
import Fade from "react-reveal/Fade";

function Contact() {
	const [query, setQuery] = useState({
		name: "",
		email: "",
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
		fetch("https://getform.io/f/d970cf61-3c77-4030-b0ba-27affe5b4473", {
			method: "POST",
			body: formData,
		}).then(() => setQuery({ name: "", email: "", message: "" }));
	};
	return (
		<div id='contact' className='flex flex-col items-center h-full w-full py-8'>
			<Fade right>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-8'>
					Get In Touch
				</h1>
			</Fade>

			<div className='flex flex-col items-center text-gray-300 text-base md:text-xl mb-2 '>
				<p>I'm readily available to work with</p>
				<p>you</p>
			</div>
			<div className='text-gray-300 text-sm mb-4 md:mb-12 md:text-lg lg:fixed lg:bottom-28 lg:-left-36 lg:flex items-center transform lg:rotate-90 lg:space-x-8 lg:text-sm'>
				<Fade right duration={1000} delay={1000}>
					<a
						href='mailto:valentine.chinedu@gmail.com'
						className='tracking-wide hover:text-[#00ffff] overflow-hidden'
					>
						valentinechinedudev@gmail.com
					</a>

					<div className='hidden lg:flex items-center bg-[#00ffff] h-[0.10rem] w-[8rem] mt-1'></div>
				</Fade>
			</div>

			<form onSubmit={formSubmit} className='w-full flex flex-col items-center'>
				<div>
					<input
						className='w-[23rem] md:w-[38rem] lg:w-[50rem] h-10 md:h-14 pl-2 lg:pl-8 rounded-md opacity-60 mb-4 focus:outline-none'
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
						className='w-[23rem] md:w-[38rem] lg:w-[50rem] h-10 md:h-14 pl-2 lg:pl-8 rounded-md opacity-60 mb-4 focus:outline-none'
						type='email'
						name='email'
						placeholder='Email'
						value={query.email}
						onChange={handleParam()}
					/>
				</div>
				<div className='mb-3 md:mb-5 lg:mb-8'>
					<textarea
						className='rounded-md w-[23rem] md:w-[38rem] lg:w-[50rem] pt-2 opacity-60 pl-2 lg:pl-8 lg:pt-4 focus:outline-none'
						name='message'
						placeholder='Your message...'
						required
						value={query.message}
						onChange={handleParam()}
						rows='8'
						cols='43'
					/>
				</div>
				<div className='flex w-full items-start pl-6 mb-10 md:mb-16 lg:pl-12 lg:mb-12 md:pl-20'>
					<button
						className='border border-[#00ffff] lg:hover:bg-[#00ffff] lg:hover:bg-opacity-10 py-0.5 px-2 md:py-2 text-sm md:text-lg rounded-md text-[#00ffff]'
						type='submit'
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
