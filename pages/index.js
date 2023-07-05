import React, { useContext } from 'react';
import Head from 'next/head';

import Home from '../components/home/Home';
import Intro from '../components/home/Intro';

import GlobalStateContext from '../contextprovider/Context';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function index({ articles }) {
	const { isLoaded } = useContext(GlobalStateContext);

	return (
		<div className='z-20 h-full w-full overflow-x-hidden font-sans text-gray-400'>
			<Head>
				<title>Valentine Okosi.</title>
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
	const client = new ApolloClient({
		uri: 'https://api.hashnode.com',
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			query GetPosts {
				user(username: "okosival") {
					publication {
						posts(page: 0) {
							_id
							coverImage
							slug
							title
							brief
							dateAdded
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			articles: data.user.publication.posts,
		},
	};
}
