import Zoom from "react-reveal/Zoom";

function Intro({ openSideBar }) {
	return (
		<div
			className={`flex flex-col relative justify-center px-6 md:pl-16 h-full w-full ${
				openSideBar ? "filter blur-sm" : ""
			}`}
		>
			<Zoom>
				<h3 className='text-[#00ffff] text-lg mb-4 md:mb-6 font-semibold tracking-wider'>
					Hi, my name is
				</h3>
				<h1 className='font-extrabold text-3xl md:text-5xl text-gray-300 mb-3 md:mb-6'>
					Valentine Chinedu.
				</h1>
				<h1 className='font-bold text-3xl md:text-5xl text-gray-400 mb-8 md:mb-14'>
					I build things for the web.
				</h1>
				<p className='text-lg text-gray-300 mb-12 border-2 border-[#00ffff] py-4 px-4 md:mb-16 md:w-[25rem]'>
					I'm a Nigerian based web developer who specializes in building
					exceptional digital expriences, accessible and human-centered
					products.
				</p>
				<div className='w-full flex justify-center md:justify-start'>
					<a
						className='border-2 border-solid border-[#00ffff] rounded-md px-8 py-4 text-[#00ffff] tracking-wider'
						href='#contact'
					>
						Get In Touch
					</a>
				</div>
			</Zoom>
		</div>
	);
}

export default Intro;
