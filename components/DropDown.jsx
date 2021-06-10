import { VscChromeClose } from "react-icons/vsc";

function DropDown({ openSideBar, setOpenSideBar }) {
	return (
		<div
			className={` flex-col items-center fixed h-[46rem] z-50 inset-y-0 right-0 overflow-x-hidden bg-[#053f3f] transition-width duration-500 ease-in-out ${
				openSideBar ? "w-80" : "w-0"
			}`}
		>
			<div
				onClick={() => setOpenSideBar(false)}
				className='flex w-full justify-end pt-4 pr-6 mb-24'
			>
				<VscChromeClose className='text-4xl text-[#00ffff]' />
			</div>
			<div className='space-y-6 mb-14'>
				<a href='#about' className='flex flex-col items-center'>
					<p className='text-[#00ffff] font-medium'>01.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>About</h2>
				</a>
				<a href='#exprience' className='flex flex-col items-center'>
					<p className='text-[#00ffff] font-medium'>02.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Exprience
					</h2>
				</a>
				<a href='#projects' className='flex flex-col items-center'>
					<p className='text-[#00ffff] font-medium'>03.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Projects
					</h2>
				</a>
				<a href='#contacts' className='flex flex-col items-center'>
					<p className='text-[#00ffff] font-medium'>04.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Contact
					</h2>
				</a>
			</div>
			<div className='flex flex-col items-center '>
				<button className='border-solid border-2 border-[#00ffff] text-[#00ffff] rounded px-12 py-3 font-semibold'>
					Resume
				</button>
			</div>
		</div>
	);
}

export default DropDown;
