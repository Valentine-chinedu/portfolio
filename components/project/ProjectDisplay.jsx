function ProjectDisplay({ data }) {
	return (
		<div
			className='flex flex-col justify-around relative overflow-hidden mx-6 rounded-md mb-6 h-72 p-6 text-gray-300 bg-cover bg-[#1E2640] bg-blend-soft-light'
			style={{ backgroundImage: `url(${data.image})` }}
		>
			{/* <img
				className='absolute left-0 top-0 w-[100%] h-[100%] filter brightness-50'
				src={data.image}
				alt='bgimage'
			/> */}
			<h1 className='relative font-bold text-lg mb-6'>{data.title}</h1>
			<p className='relative mb-6 tracking-wide'>{data.description}</p>
			<h3 className='relative mb-4 tracking-wider '>{data.tools}</h3>
			<div className='relative flex space-x-4'>
				<a className='text-blue-400' href={data.github}>
					<svg
						className='h-5'
						xmlns='http://www.w3.org/2000/svg'
						role='img'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						class='feather feather-github'
					>
						<title>GitHub</title>
						<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
					</svg>
				</a>
				<a className='text-blue-400' href={data.url}>
					<svg
						className='h-5'
						xmlns='http://www.w3.org/2000/svg'
						role='img'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						class='feather feather-external-link'
					>
						<title>External Link</title>
						<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
						<polyline points='15 3 21 3 21 9'></polyline>
						<line x1='10' y1='14' x2='21' y2='3'></line>
					</svg>
				</a>
			</div>
		</div>
	);
}

export default ProjectDisplay;