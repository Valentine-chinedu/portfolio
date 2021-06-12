import React, { useState } from "react";

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
			<h1 className='text-3xl md:4xl font-bold text-gray-400 mb-8'>Hire Me</h1>

			<div className='flex flex-col items-center text-gray-400 text-sm md:text-xl mb-8'>
				<p>I'm readily available to work with</p>
				<p>you</p>
			</div>

			<form onSubmit={formSubmit} className='w-full flex flex-col items-center'>
				<div>
					<input
						className='w-80 md:w-[38rem] h-10 md:h-14 pl-2 rounded-md opacity-60 mb-4 focus:outline-none'
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
						className='w-80 md:w-[38rem] h-10 md:h-14 pl-2 rounded-md opacity-60 mb-4 focus:outline-none'
						type='email'
						name='email'
						placeholder='Email'
						value={query.email}
						onChange={handleParam()}
					/>
				</div>
				<div className='mb-3 md:mb-5'>
					<textarea
						className='rounded-md md:w-[38rem] opacity-60 pl-2 focus:outline-none'
						name='message'
						placeholder='Your message...'
						required
						value={query.message}
						onChange={handleParam()}
						rows='8'
						cols='43'
					/>
				</div>
				<div className='flex w-full items-start pl-12 md:pl-20 mb-6'>
					<button
						className='border border-[#00ffff] py-0.5 px-2 md:py-2 text-sm md:text-lg rounded-md text-[#00ffff]'
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
