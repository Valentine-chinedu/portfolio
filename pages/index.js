import React, { useContext } from 'react';
import Head from 'next/head';

import Home from '../components/home/Home';
import Intro from '../components/home/Intro';

import GlobalStateContext from '../contextprovider/Context';

import { getArticles } from '../utilities/getArticles';

export default function index({ articles }) {
	const { isLoaded } = useContext(GlobalStateContext);

	return (
		<div className='z-20 h-full w-full overflow-x-hidden font-sans text-gray-400'>
			<Head>
				<title>Chinedu V. Okosi.</title>
				<link rel='icon' href='/favicon-32x32.png' />
				<meta property='og:image' content='/portfolio-photo.png' />
				<meta property='og:image:type' content='image/png' />
				<meta property='og:image:width' content='300' />
				<meta property='og:image:height' content='300' />
			</Head>

			{isLoaded ? <Home articles={articles} /> : <Intro />}
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: { articles: await getArticles() },
		revalidate: 300,
	};
}
