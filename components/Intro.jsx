import Fade from "react-reveal/Fade";

function Intro({ openSideBar }) {
	return (
		<div
			id='home'
			className={`flex flex-col justify-center overflow-hidden px-6 md:pl-12 h-screen w-full lg:container lg:mx-auto lg:px-80 lg:mb-4 ${
				openSideBar ? "filter blur-sm" : ""
			}`}
		>
			<Fade top>
				<h3 className='text-[#00ffff] md:text-lg lg:text-lg mb-4 md:mb-6 font-semibold tracking-wider'>
					Hi, my name is
				</h3>
			</Fade>
			<Fade left cascade duration={1000}>
				<h1 className='font-bold text-3xl md:text-5xl lg:text-7xl text-gray-100 mb-3 md:mb-6 overflow-hidden'>
					Valentine Chinedu.
				</h1>
			</Fade>
			<Fade bottom>
				<h1 className='font-bold text-3xl md:text-5xl lg:text-6xl text-gray-400 mb-8 md:mb-14'>
					I build things for the web.
				</h1>
			</Fade>
			<p className='text-lg lg:text-xl text-gray-300 mb-12 border-2 border-[#00ffff] py-4 px-4 md:mb-16 md:w-[25rem] lg:w-[28rem]'>
				I'm a Nigerian based web developer who specializes in building
				exceptional digital expriences, accessible and human-centered products.
			</p>
			<div className='w-full flex justify-center md:justify-start'>
				<a
					className='border-2 border-solid border-[#00ffff] lg:hover:bg-[#00ffff] lg:hover:bg-opacity-10 rounded-md px-8 py-4 text-[#00ffff] tracking-wider'
					href='#contact'
				>
					Get In Touch
				</a>
			</div>
		</div>
	);
}

export default Intro;
