import Slide from "react-reveal/Slide";

function Skills() {
	return (
		<div id='skills' className='h-full w-full mb-16 pt-8 text-gray-300'>
			<Slide duration={1000} bottom>
				<div className='flex items-center justify-center mb-8'>
					<div className='bg-[#00ffff] h-[0.15rem] w-[8.7rem] md:w-[17rem]'></div>

					<span className='font-bold text-2xl text-gray-400 md:text-3xl mx-2 md:mx-4 md:space-x-8'>
						Skills
					</span>

					<div className='bg-[#00ffff] h-[0.15rem] w-[8.7rem] md:w-[17rem]'></div>
				</div>
				<div className='w-full flex flex-col items-center space-y-8 text-sm md:text-lg'>
					<div className='flex space-x-4 md:space-x-8 overflow-x-hidden'>
						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-html5.png'
								alt='logo'
							/>
							<h3 className='tracking-wider'>HTML</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-css.png'
								alt='logo'
							/>
							<h3 className='tracking-wider'>CSS</h3>
						</div>
					</div>
					<div className='flex space-x-4 md:space-x-8 overflow-y-hidden'>
						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-js.png'
								alt='logo'
							/>
							<h3 className='tracking-wider'>JavaScript</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/skill-reactjs.png'
								alt='logo'
							/>
							<h3 className='tracking-wider'>React JS</h3>
						</div>
					</div>
					<div className='flex space-x-4 md:space-x-8 overflow-x-visible'>
						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/nextjs-logo.png'
								alt='logo'
							/>
							<h3 className='tracking-wider'>Next JS</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-tailwind.jpg'
								alt='logo'
							/>
							<h3 className='tracking-wider'>Tailwind CSS</h3>
						</div>
					</div>
					<div className='flex space-x-4 md:space-x-8 overflow-y-hidden'>
						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-bootstrap5.png'
								alt='logo'
							/>
							<h3 className='tracking-wider'>Bootstrap5</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/materializecss.png'
								alt='logo'
							/>
							<h3 className='tracking-wider'>Materialize CSS</h3>
						</div>
					</div>
					<div className='flex space-x-4 md:space-x-8 overflow-x-hidden'>
						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-sass.jpeg'
								alt='logo'
							/>
							<h3 className='tracking-wider'>SASS</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 '>
							<img
								className='h-40 md:h-60 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-git.jpeg'
								alt='logo'
							/>
							<h3 className='text-lg md:text-2xl tracking-wider'>Git</h3>
						</div>
					</div>
				</div>
			</Slide>
		</div>
	);
}

export default Skills;
