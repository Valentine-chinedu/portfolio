import React, { useContext } from 'react';
import GlobalStateContext from '../../contextprovider/Context';

import About from '../home/About';
import Skills from '../home/Skills';
import Projects from '../home/Projects';
import Contact from '../home/Contact';
import Blog from '../home/Blog';

const Home = () => {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);

	return (
		<div>
			{/* close sidebar on screen touch/click */}
			{openSideBar && (
				<div
					onClick={() => {
						setOpenSideBar(false);
					}}
					className='fixed inset-0 z-40 h-full'
				></div>
			)}

			<main
				className={`space-y-28 overflow-hidden md:space-y-32 lg:space-y-36 ${
					openSideBar ? 'blur-sm filter' : ''
				}`}
			>
				<About />
				<Projects openSideBar={openSideBar} />
				<Skills openSideBar={openSideBar} />
				<Blog openSideBar={openSideBar} />
				<Contact />
			</main>
		</div>
	);
};

export default Home;
