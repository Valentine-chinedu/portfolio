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
	const client = new ApolloClient({
		uri: 'https://gql.hashnode.com',
		cache: new InMemoryCache(),
		headers: {
			'Content-Type': 'application/json',
			Authorization: process.env.HASHNODE_ACCESS_TOKEN,
		},
	});

	const { data } = await client.query({
		query: gql`
			query Publication {
				publication(host: "chineduokosi.hashnode.dev/") {
					isTeam
					title
					posts(first: 10) {
						edges {
							node {
								title
								brief
								url
								id
								publishedAt
								coverImage {
									url
								}
							}
						}
					}
				}
			}
		`,
	});

	console.log(data);

	return {
		props: {
			articles: data.publication.posts.edges.map((edge) => ({
				_id: edge.node?.id,
				title: edge.node?.title,
				brief: edge.node?.brief,
				url: edge.node?.url,
				dateAdded: edge.node?.publishedAt,
				coverImage: edge.node.coverImage?.url,
			})),
		},
	};
}
