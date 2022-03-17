import { motion } from 'framer-motion';
import { useContext } from 'react';
import { pageVariantsAnim } from '../animation';
import {
	GoogleClone,
	MovieApp,
	Onstore,
	SocialHangout,
	Spacex,
} from '../components/project';
import GlobalStateContext from '../contextprovider/Context';

function Projects() {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);
	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			onClick={() => setOpenSideBar(false)}
			className={`primary-theme dark:secondary-theme flex h-full w-full flex-col items-center justify-center pt-24 md:pt-36 ${
				openSideBar ? 'blur-sm filter' : ''
			}`}
		>
			<h2 className='font-extrabold uppercase text-gray-800 dark:text-gray-100 md:text-2xl'>
				projects built
			</h2>
			<div className='flex h-full w-full flex-col items-center overflow-x-hidden lg:w-full'>
				<Onstore />
				<MovieApp />
				<SocialHangout />
				<Spacex />
				<GoogleClone />
			</div>
		</motion.div>
	);
}

export default Projects;
