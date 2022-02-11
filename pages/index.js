import Head from 'next/head';
import { useContext, useEffect } from 'react';
import LandingPage from '../components/home/LandingPage';

import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';

import GlobalStateContext from '../contextprovider/Context';
import About from '../components/home/About';
import Blog from '../components/home/Blog';
import { useTheme } from 'next-themes';

export default function Home() {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);
	const { isLoaded } = useContext(GlobalStateContext);
	const { setTheme } = useTheme();

	useEffect(() => {
		setTheme('dark');
	}, []);
	return (
		<div className='primary-theme dark:secondary-theme z-20 h-full w-full overflow-x-hidden pb-24 font-sans transition-all duration-700 md:pb-32 lg:pb-40'>
			<Head>
				<title>Valentine's Portfolio.</title>
				<link rel='icon' href='/favicon-32x32.png' />
				<meta property='og:image' content='/portfolio-screenshot.jpg' />
				<meta property='og:image:type' content='image/jpeg' />
				<meta property='og:image:width' content='300' />
				<meta property='og:image:height' content='300' />
			</Head>

			{!isLoaded && (
				<div className='h-screen w-full overflow-hidden'>
					<LandingPage />
				</div>
			)}

			{/* close sidebar on screen touch/click */}
			{openSideBar && (
				<div
					onClick={() => {
						setOpenSideBar(false);
					}}
					className='fixed inset-0 z-40 h-full'
				></div>
			)}

			{isLoaded && (
				<main
					className={`space-y-32 overflow-hidden md:space-y-52 lg:space-y-60 ${
						openSideBar ? 'blur-sm filter' : ''
					}`}
				>
					<About />
					<Projects openSideBar={openSideBar} />
					<Skills openSideBar={openSideBar} />
					<Blog openSideBar={openSideBar} />
					<Contact />
				</main>
			)}
		</div>
	);
}
