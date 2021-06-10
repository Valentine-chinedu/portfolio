import Slide from "react-reveal/Slide";

function Skills() {
	return (
		<div className='h-full w-full mb-16 text-gray-100'>
			<Slide duration={1000} bottom>
				<div className='flex items-center justify-center mb-8'>
					<div className='bg-[#00ffff] h-[0.15rem] w-[7.5rem]'></div>

					<span className='font-bold text-2xl mx-2'>Skills</span>

					<div className='bg-[#00ffff] h-[0.15rem] w-[7.5rem]'></div>
				</div>
				<div className='w-full flex flex-col items-center space-y-8'>
					<div className='flex space-x-4 overflow-x-hidden'>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-html5.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>HTML</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInRight'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-css.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>CSS</h3>
						</div>
					</div>
					<div className='flex space-x-4 overflow-y-hidden'>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-js.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>JavaScript</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInRight'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skill-reactjs.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>React JS</h3>
						</div>
					</div>
					<div className='flex space-x-4 overflow-x-visible'>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/nextjs-logo.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>Next JS</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInRight'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-tailwind.jpg'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>Tailwind CSS</h3>
						</div>
					</div>
					<div className='flex space-x-4 overflow-y-hidden'>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-bootstrap5.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>Bootstrap5</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInRight'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/materializecss.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>Materialize CSS</h3>
						</div>
					</div>
					<div className='flex space-x-4 overflow-x-hidden'>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-sass.jpeg'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>SASS</h3>
						</div>

						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeIn'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-git.jpeg'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider'>Git</h3>
						</div>
					</div>
				</div>
			</Slide>
		</div>
	);
}

export default Skills;
