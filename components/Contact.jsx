import React, { useState } from "react";

import Slide from "react-reveal/Slide";

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
		<div className='flex flex-col items-center  h-full w-full py-8 mb-12'>
			<Slide duration={1000} bottom>
				<h1 className='text-3xl font-bold text-gray-300 mb-8'>Hire Me</h1>

				<div className='flex flex-col items-center text-gray-100 text-lg mb-8'>
					<p>I'm readily available to work with</p>
					<p>you</p>
				</div>

				<form
					onSubmit={formSubmit}
					className='w-full flex flex-col items-center'
				>
					<div>
						<input
							className='w-80 h-10 pl-2 rounded-md opacity-60 mb-4 focus:outline-none'
							type='text'
							name='name'
							required
							placeholder='Your Name'
							value={query.name}
							onChange={handleParam()}
						/>
					</div>
					<div>
						<input
							className='w-80 h-10 pl-2 rounded-md opacity-60 mb-4 focus:outline-none'
							type='email'
							name='email'
							placeholder='Email'
							value={query.email}
							onChange={handleParam()}
						/>
					</div>
					<div className='mb-3'>
						<textarea
							className='rounded-md opacity-60 pl-2 pt- focus:outline-none'
							name='message'
							placeholder='Your message...'
							required
							value={query.message}
							onChange={handleParam()}
							rows='8'
							cols='38'
						/>
					</div>
					<div className='space-x-3 flex w-full items-start pl-12 mb-6'>
						<button
							className='border border-[#88a1a1] py-0.5 px-2 rounded-md text-[#00ffff]'
							type='submit'
						>
							Send Message
						</button>
					</div>

					{/* {state.succeeded && (
						<p className='text-gray-300 text-sm'>message sent!</p>
					)} */}
				</form>
			</Slide>
		</div>
	);
}

export default Contact;