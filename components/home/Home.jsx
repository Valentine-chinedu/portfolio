import React, { useContext } from 'react';
import GlobalStateContext from '../../contextprovider/Context';

import Skills from '../home/Skills';
import Projects from '../home/Projects';
import Contact from '../home/Contact';

import HeroSection from './Hero';
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
				<HeroSection />
				<Projects />
				<Blog articles={articles} />
				<Skills />
				<Contact />
			</main>
		</div>
	);
};

export default Home;
