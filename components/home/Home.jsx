import React, { useContext } from 'react';
import GlobalStateContext from '../../contextprovider/Context';

import About from '../home/About';
import Skills from '../home/Skills';
import Projects from '../home/Projects';
import Contact from '../home/Contact';

import LandingPage from './LandingPage';
import Blog from './Blog';

const Home = ({ articles }) => {
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
				<Projects />
				<Blog articles={articles} />
				{/* <About /> */}
				<Skills />
				<Contact />
			</main>
		</div>
	);
};

export default Home;
