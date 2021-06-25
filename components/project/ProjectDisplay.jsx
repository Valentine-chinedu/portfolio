function ProjectDisplay({ project }) {
	return (
		<div
			className='flex flex-col justify-around overflow-hidden rounded-md mb-6 md:mb-12 lg:mb-20 h-72 md:h-[25rem] lg:h-96 lg:w-[30rem] p-6 text-gray-200 lg:text-gray-300 bg-cover bg-[#033131] bg-blend-soft-light lg:hover:bg-blend-normal '
			style={{ backgroundImage: `url(${project.image})` }}
		>
			<div className='lg:absolute lg:right-24 lg:flex flex-col items-end'>
				<a
					href={project.url}
					className='font-bold text-gray-100 text-lg md:text-2xl mb-6 hover:text-[#00ffff]'
				>
					{project.title}
				</a>
				<p className='mb-6 tracking-wide text-base md:text-lg mt-6 md:mt-8 lg:text-sm lg:font-semibold lg:bg-gray-700 lg:w-96 lg:rounded lg:py-6 lg:pl-12 lg:pr-2 lg:shadow-lg'>
					{project.description}
				</p>
				<h3 className='mb-12 lg:mb-4 tracking-wider text-base md:text-lg lg:text-sm lg:font-semibold'>
					{project.tools}
				</h3>
				<div className='flex space-x-4 '>
					<a
						className='text-[#00ffff] lg:text-gray-400 lg:hover:text-[#00ffff]'
						href={project.github}
					>
						<svg
							className='h-5 md:h-6 lg:h-5'
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
					<a
						className='text-[#00ffff] lg:text-gray-400 lg:hover:text-[#00ffff]'
						href={project.url}
					>
						<svg
							className='h-5 md:h-6 lg:h-5'
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
		</div>
	);
}

export default ProjectDisplay;
