import "animate.css";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

function Skills() {
	return (
		<div className='h-full w-full'>
			<div className='flex items-center justify-center mb-12'>
				<Zoom duration={1000} left>
					<div className='bg-green-400 h-[0.15rem] w-[7.5rem]'></div>
				</Zoom>
				<Zoom>
					<span className='font-bold text-2xl text-gray-800 mx-2'>Skills</span>
				</Zoom>
				<Zoom duration={1000} right>
					<div className='bg-green-400 h-[0.15rem] w-[7.5rem]'></div>
				</Zoom>
			</div>
			<div className='w-full flex flex-col items-center space-y-8'>
				<div className='flex space-x-4'>
					<Slide duration={1000} delay={1000} left>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-html5.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>HTML</h3>
						</div>
					</Slide>
					<Slide duration={1000} delay={1000} right>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInRight'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-css.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>CSS</h3>
						</div>
					</Slide>
				</div>
				<div className='flex space-x-4 '>
					<Slide duration={1000} delay={1000} bottom>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-js.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>
								JavaScript
							</h3>
						</div>
					</Slide>
					<Slide duration={1000} delay={1000} bottom>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInRight'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skill-reactjs.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>React JS</h3>
						</div>
					</Slide>
				</div>
				<div className='flex space-x-4 '>
					<Slide duration={1000} delay={1000} left>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/nextjs-logo.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>Next JS</h3>
						</div>
					</Slide>
					<Slide duration={1000} delay={1000} right>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInRight'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-tailwind.jpg'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>
								Tailwind CSS
							</h3>
						</div>
					</Slide>
				</div>
				<div className='flex space-x-4'>
					<Slide duration={1000} delay={1000} bottom>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-bootstrap5.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>
								Bootstrap5
							</h3>
						</div>
					</Slide>
					<Slide duration={1000} delay={1000} bottom>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInRight'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/materializecss.png'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>
								Materialize CSS
							</h3>
						</div>
					</Slide>
				</div>
				<div className='flex space-x-4'>
					<Slide duration={1000} delay={1000} left>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeInLeft'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-sass.jpeg'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>SASS</h3>
						</div>
					</Slide>
					<Slide duration={1000} delay={1000} right>
						<div className='flex flex-col items-center space-y-2 animate__animated animate__fadeIn'>
							<img
								className='h-40 rounded-md shadow-lg'
								loading='lazy'
								src='/skills-git.jpeg'
								alt='logo'
							/>
							<h3 className='text-lg tracking-wider text-gray-700'>Git</h3>
						</div>
					</Slide>
				</div>
			</div>
		</div>
	);
}

export default Skills;
