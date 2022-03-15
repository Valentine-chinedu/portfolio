export const pageVariantsAnim = {
	initial: {
		opacity: 0,
	},
	in: {
		transition: { duration: 1, ease: 'easeIn' },
		opacity: 1,
		staggerChildren: 1,
	},
	out: {
		opacity: 0,
		transition: { duration: 0.25, ease: 'easeOut' },
	},
};
