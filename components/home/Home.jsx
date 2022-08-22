import React, { useContext } from 'react';
import GlobalStateContext from '../../contextprovider/Context';

import About from '../home/About';
import Skills from '../home/Skills';
import Projects from '../home/Projects';
import Contact from '../home/Contact';

import LandingPage from './LandingPage';

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
				className={`overflow-hidden ${openSideBar ? 'blur-sm filter' : ''}`}
			>
				<LandingPage />
				<About />
				<Projects />
				<Skills />
				{/* <Blog /> */}
				<Contact />
			</main>
		</div>
	);
};

export default Home;
