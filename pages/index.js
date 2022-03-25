import React, { useContext } from 'react';
import Head from 'next/head';
import { useEffect } from 'react';

import Home from '../components/home/Home';
import Intro from '../components/home/Intro';

import { useTheme } from 'next-themes';
import GlobalStateContext from '../contextprovider/Context';

export default function index() {
	const { isLoaded } = useContext(GlobalStateContext);

	const { setTheme } = useTheme();

	useEffect(() => {
		setTheme('dark');
	}, []);

	return (
		<div className='primary-theme dark:secondary-theme z-20 h-full w-full overflow-x-hidden pb-24 font-sans transition-all duration-700 md:pb-32 lg:pb-40'>
			<Head>
				<title>Valentine Okosi.</title>
				<link rel='icon' href='/favicon-32x32.png' />
				<meta property='og:image' content='/portfolio-screenshot.jpg' />
				<meta property='og:image:type' content='image/jpeg' />
				<meta property='og:image:width' content='300' />
				<meta property='og:image:height' content='300' />
			</Head>

			{isLoaded ? <Home /> : <Intro />}
		</div>
	);
}
