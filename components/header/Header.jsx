import { useContext } from 'react';

import GlobalStateContext from '../../contextprovider/Context';
import { pageVariantsAnim } from '../../animation';
import { motion } from 'framer-motion';

import Logo from './Logo';
import NavBar from './NavBar';

function Header() {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='fixed z-50 flex h-[3rem] w-full items-center justify-center overflow-x-hidden bg-[#010e03] bg-opacity-20 py-3 text-gray-400 shadow-md md:h-[4rem] lg:z-20'
		>
			<div className='flex h-full w-11/12 items-center justify-between lg:w-10/12 lg:pl-6'>
				<Logo />
				<div className='flex items-center space-x-2 md:space-x-4 lg:space-x-8'>
					<NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
				</div>
			</div>
		</motion.div>
	);
}

export default Header;
