import React from 'react';
import { render, screen } from '@testing-library/react';
import 'react-intersection-observer/test-utils';
import Blog from '../components/home/Blog';

jest.mock('react-responsive-carousel/lib/styles/carousel.min.css', () => ({}));

it('renders article content and links through the carousel with React 18', () => {
	render(<Blog articles={[{
		_id: 'node-26',
		title: 'Upgrading Node.js',
		brief: 'A guide to upgrading the runtime.',
		url: 'https://example.com/node-26',
		dateAdded: '2026-11-24',
		coverImage: '/portfolio-photo.png',
	}]} />);

	expect(screen.getByRole('heading', { name: 'Upgrading Node.js' })).toBeInTheDocument();
	expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute(
		'href', 'https://example.com/node-26'
	);
});
