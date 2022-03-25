import { motion } from 'framer-motion';
import { pageVariantsAnim } from '../../animation';

function About() {
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			className=' flex h-full w-screen flex-col items-center pt-20 md:justify-center md:px-12 md:pt-28 lg:container lg:mx-auto lg:pt-0'
			id='home'
		>
			<div className='w-full lg:w-auto'>
				<div className='flex w-full flex-col items-center space-y-4 lg:space-y-8'>
					<h3 className='font-bold text-gray-600 dark:text-gray-200 md:text-xl lg:text-2xl'>
						What I do
					</h3>

					<ul className='w-12/12 ml-2 list-inside list-disc space-y-1.5 pr-2 text-sm font-medium text-gray-600 dark:text-gray-200 md:space-y-1 md:text-lg lg:space-y-2.5'>
						<li>Convert designs to pixel perfect HTML code</li>
						<li>Ensure Responsiveness and Compatability</li>
						<li>Style and Animate websites</li>
						<li>Add interactivity to websites</li>
						<li>Build Single and Multi Page Apps</li>
						<li>Build Server-side rendered and Static-site websites</li>
						<li>Perform CRUD operation using REST API</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
