module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			transitionProperty: {
				width: 'width',
				height: 'height',
			},

			backgroundImage: {
				hero_image: "url('/bg_images/Web_developer.png')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
