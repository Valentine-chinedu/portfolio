import { useContext } from 'react';

import GlobalStateContext from '../../contextprovider/Context';
import { pageVariantsAnim } from '../../animation';
import { motion } from 'framer-motion';

import Logo from './Logo';
import Theme from './Theme';
import NavBar from './NavBar';

function Header() {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className='primary-theme dark:secondary-theme fixed z-50 flex h-[2.5rem] w-full items-center justify-center overflow-x-hidden shadow-md md:h-[3rem] lg:z-20'
		>
			<div className='flex h-full w-11/12 items-center justify-between lg:w-full lg:pl-6'>
				<Logo />
				<div className='flex items-center space-x-2 md:space-x-4 lg:space-x-8'>
					<Theme />
					<NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
				</div>
			</div>
		</motion.div>
	);
}

export default Header;
