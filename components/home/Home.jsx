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
				className={`space-y-24 overflow-hidden md:space-y-48 lg:space-y-60 ${
					openSideBar ? 'blur-sm filter' : ''
				}`}
			>
				<About />
				<Projects />
				<Skills />
				<Blog />
				<Contact />
			</main>
		</div>
	);
};

export default Home;
