import { VscChromeClose } from "react-icons/vsc";

function DropDown({ openSideBar, setOpenSideBar }) {
	return (
		<div
			className={` flex-col items-center fixed h-[46rem] z-50 inset-y-0 right-0 overflow-x-hidden bg-[#09091d] transition-width duration-500 ease-in-out ${
				openSideBar ? "w-72" : "w-0"
			}`}
		>
			<div
				onClick={() => setOpenSideBar(false)}
				className='flex w-full justify-end pt-4 pr-6 mb-24'
			>
				<VscChromeClose className='text-4xl text-blue-400' />
			</div>
			<div className='space-y-6 mb-14'>
				<div className='flex flex-col items-center'>
					<p className='text-blue-400 font-medium'>01.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>About</h2>
				</div>
				<div className='flex flex-col items-center'>
					<p className='text-blue-400 font-medium'>02.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Exprience
					</h2>
				</div>
				<div className='flex flex-col items-center'>
					<p className='text-blue-400 font-medium'>03.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Projects
					</h2>
				</div>
				<div className='flex flex-col items-center'>
					<p className='text-blue-400 font-medium'>04.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Contact
					</h2>
				</div>
			</div>
			<div className='flex flex-col items-center '>
				<button className='border-solid border-2 border-blue-400 text-blue-400 rounded px-12 py-3 font-semibold'>
					Resume
				</button>
			</div>
		</div>
	);
}

export default DropDown;
