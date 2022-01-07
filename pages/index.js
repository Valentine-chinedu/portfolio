import Head from 'next/head';
import { useState } from 'react';
import LandingPage from '../components/LandingPage';

import Skills from '../components/Skills';
import Projects from '../components/project/Projects';
import Contact from '../components/Contact';

import NavBar from '../components/NavBar';

export default function Home() {
	const [openSideBar, setOpenSideBar] = useState(false);

	return (
		<div className='font-sans overflow-x-hidden  z-20 h-full w-full'>
			<Head>
				<title>Valentine Okosi C.</title>
				<link rel='icon' href='/favicon-32x32.png' />
			</Head>

			<header className='h-screen w-full overflow-hidden'>
				<NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

				<LandingPage openSideBar={openSideBar} />
			</header>

			{/* close sidebar on screen touch/click */}
			{openSideBar && (
				<div
					onClick={() => {
						setOpenSideBar(false);
					}}
					className='fixed h-full inset-0 z-40'
				></div>
			)}

			<main
				className={`overflow-hidden ${openSideBar ? 'filter blur-sm' : ''}`}
			>
				<Projects openSideBar={openSideBar} />
				<Skills openSideBar={openSideBar} />
			</main>
			<footer className={`lg:container ${openSideBar ? 'filter blur-sm' : ''}`}>
				<Contact />
			</footer>
		</div>
	);
}
