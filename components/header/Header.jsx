import { useContext, useEffect, useState } from 'react';

import GlobalStateContext from '../../contextprovider/Context';
import { pageVariantsAnim } from '../../animation';
import { motion } from 'framer-motion';

import Logo from './Logo';
import NavBar from './NavBar';

function Header() {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);
	const [isVisible, setIsVisible] = useState(true);
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);

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

	useEffect(() => {
		let prevScrollPos = window.scrollY;
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setIsHeaderVisible(prevScrollPos > currentScrollPos);
			prevScrollPos = currentScrollPos;
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className={`fixed z-50 flex w-full items-center justify-center overflow-y-hidden bg-black bg-opacity-30 text-gray-400 transition-all duration-500 lg:z-20 ${
				isVisible && 'shadow shadow-[#00FFFF]'
			} ${isHeaderVisible ? 'h-[3rem] md:h-[4rem]' : 'h-0 py-0'} `}
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
