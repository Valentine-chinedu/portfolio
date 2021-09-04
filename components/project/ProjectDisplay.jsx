function ProjectDisplay({ project }) {
	return (
		<div className='relative'>
			<div className='mb-4 lg:absolute lg:bottom-28 lg:left-[26rem] flex flex-col lg:items-end text-gray-300 lg:text-gray-400'>
				<h2 className='font-semibold text-gray-300 lg:text-gray-300 text-lg md:text-3xl'>
					{project.title}
				</h2>
				<p className='mb-6 tracking-wide text-sm md:text-lg mt-6 md:mt-8 lg:text-sm lg:font-semibold lg:bg-gray-700 lg:w-96 lg:rounded lg:py-6 lg:pl-12 lg:pr-2 lg:shadow-lg'>
					{project.description}
				</p>
				<h3 className='tracking-wider text-sm md:text-lg lg:text-sm lg:font-semibold'>
					{project.tools}
				</h3>
			</div>
			<a href={project.url}>
				<div
					className='flex flex-col justify-around z-40 overflow-hidden rounded-md mb-2 md:mb-4 h-72 md:h-[25rem] lg:h-96 lg:w-[30rem] text-gray-300 lg:text-gray-300 bg-cover lg:bg-[rgba(34,31,31,0.97)] lg:bg-blend-soft-light lg:hover:bg-blend-normal'
					style={{ backgroundImage: `url(${project.image})` }}
				></div>
			</a>
			<div className='flex lg:absolute pb-16 md:pb-20 lg:pb-0 lg:bottom-20 lg:left-[39.6rem] text-[#00ffff] lg:text-gray-400 lg:hover:text-[#00ffff] cursor-pointer'>
				<a
					href={project.github}
					target='_blank'
					className='flex items-center md:text-xl lg:text-base underline'
				>
					See code on github
					{/* <svg
						className='h-5 md:h-6 lg:h-[16px]'
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
					</svg> */}
				</a>
			</div>
		</div>
	);
}

export default ProjectDisplay;
