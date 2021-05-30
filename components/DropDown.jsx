import { VscChromeClose } from "react-icons/vsc";

function DropDown({ openSideBar, setOpenSideBar }) {
	return (
		<div
			className={`flex flex-col items-center absolute inset-y-0 right-0 h-screen bg-blue-900 ${
				openSideBar ? "w-72" : "w-0"
			}`}
		>
			<div
				onClick={() => setOpenSideBar(false)}
				className='flex w-full justify-end pt-8 pr-6 mb-20'
			>
				<VscChromeClose className='text-4xl text-green-300' />
			</div>
			<div className={`space-y-6 mb-14 ${!openSideBar ? "w-0" : ""}`}>
				<div className='flex flex-col items-center'>
					<p className='text-green-300 font-medium'>01.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>About</h2>
				</div>
				<div className='flex flex-col items-center'>
					<p className='text-green-300 font-medium'>02.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Exprience
					</h2>
				</div>
				<div className='flex flex-col items-center'>
					<p className='text-green-300 font-medium'>03.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Projects
					</h2>
				</div>
				<div className='flex flex-col items-center'>
					<p className='text-green-300 font-medium'>04.</p>
					<h2 className='text-gray-200 font-semibold tracking-wider'>
						Contact
					</h2>
				</div>
			</div>
			<div className='flex flex-col items-center '>
				<button className='border-solid border-2 border-green-300 text-green-300 rounded px-12 py-3 font-semibold'>
					Resume
				</button>
			</div>
		</div>
	);
}

export default DropDown;
