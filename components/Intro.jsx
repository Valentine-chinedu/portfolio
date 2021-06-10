import Zoom from "react-reveal/Zoom";

function Intro() {
	return (
		<div className='flex flex-col relative justify-center pt-28 px-6 h-full w-full'>
			<Zoom>
				<h3 className='text-[#00ffff] text-lg mb-4 font-semibold tracking-wider'>
					Hi, my name is
				</h3>
				<h1 className='font-extrabold text-3xl text-gray-200 mb-3'>
					Valentine Chinedu.
				</h1>
				<h1 className='font-bold text-3xl text-gray-400 mb-8'>
					I build things for the web.
				</h1>
				<p className='text-lg text-gray-100 mb-12 border-2 border-[#00ffff] py-4 px-4'>
					I'm a Nigerian based web developer who specializes in building
					exceptional digital expriences, accessible and human-centered
					products.
				</p>
				<div className='w-full flex justify-center'>
					<a
						className='border-2 border-solid border-[#00ffff] rounded-md px-8 py-4 text-[#00ffff] tracking-wider'
						href=''
					>
						Get In Touch
					</a>
				</div>
			</Zoom>
		</div>
	);
}

export default Intro;
