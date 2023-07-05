import { useContext, useEffect, useState } from 'react';

import GlobalStateContext from '../../contextprovider/Context';
import { pageVariantsAnim } from '../../animation';
import { motion } from 'framer-motion';

import Logo from './Logo';
import NavBar from './NavBar';

function Header() {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 0 && isVisible) {
				setIsVisible(false);
			} else if (scrollPosition === 0 && !isVisible) {
				setIsVisible(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isVisible]);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className={`fixed z-50 flex h-[3rem] w-full items-center justify-center overflow-x-hidden bg-black bg-opacity-30 py-3 text-gray-400 md:h-[4rem] lg:z-20 ${
				isVisible && 'shadow shadow-[#00FFFF]'
			}`}
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
