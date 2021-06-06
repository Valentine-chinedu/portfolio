import Zoom from "react-reveal/Zoom";

function Intro() {
	return (
		<div className='pt-28 mx-6'>
			<Zoom>
				<h3 className='text-blue-400 text-lg mb-4 font-semibold tracking-wider'>
					Hi, my name is
				</h3>
				<h1 className='font-extrabold text-3xl text-gray-100 mb-3'>
					Valentine Chinedu.
				</h1>
				<h1 className='font-bold text-3xl text-gray-400 mb-8'>
					I build things for the web.
				</h1>
				<p className='text-lg text-gray-100 mb-12 border-2 border-blue-400 py-4 px-4 bg-[#03011a]'>
					I'm a Nigerian based web developer who specializes in building
					exceptional digital expriences, accessible and human-centered
					products.
				</p>
				<div className='w-full flex justify-center'>
					<a
						className='border-2 border-solid border-blue-400 rounded-md px-8 py-4 bg-[#03011a] text-blue-400 tracking-wider'
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
