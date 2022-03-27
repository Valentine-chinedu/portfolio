module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],

	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				sp: '736',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
