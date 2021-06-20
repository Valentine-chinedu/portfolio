import { VscChromeClose } from "react-icons/vsc";

function DropDown({ openSideBar, setOpenSideBar }) {
	return (
		<div
			className={`lg:hidden flex-col overflow-hidden items-center fixed h-[46rem] md:h-screen z-50 inset-y-0 right-0 overflow-x-hidden bg-[#170030] transition-width duration-500 ease-in-out ${
				openSideBar ? "w-80 md:w-[26rem]" : "w-0"
			}`}
		>
			<div
				onClick={() => setOpenSideBar(false)}
				className='flex w-full justify-end pt-8 pr-6'
			>
				<VscChromeClose className='text-4xl text-[#00ffff]' />
			</div>
			<div className='space-y-6 md:space-y-10 flex h-full flex-col justify-center md:text-lg'>
				<a
					onClick={() => setOpenSideBar(false)}
					href='#about'
					className='flex flex-col items-center'
				>
					<p className='text-[#00ffff] font-medium'>01.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider md:text-lg'>
						About
					</h2>
				</a>
				<a
					onClick={() => setOpenSideBar(false)}
					href='#skills'
					className='flex flex-col items-center'
				>
					<p className='text-[#00ffff] font-medium'>02.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider md:text-lg'>
						Skills
					</h2>
				</a>
				<a
					onClick={() => setOpenSideBar(false)}
					href='#projects'
					className='flex flex-col items-center'
				>
					<p className='text-[#00ffff] font-medium'>03.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider md:text-lg'>
						Projects
					</h2>
				</a>
				<a
					onClick={() => setOpenSideBar(false)}
					href='#contact'
					className='flex flex-col items-center'
				>
					<p className='text-[#00ffff] font-medium'>04.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider md:text-lg mb-10'>
						Contact
					</h2>
				</a>
				<div className='flex flex-col items-center'>
					<button className=' border-solid border-2 border-[#00ffff] text-[#00ffff] rounded px-12 py-3 font-semibold'>
						Resume
					</button>
				</div>
			</div>
		</div>
	);
}

export default DropDown;
