import { motion } from 'framer-motion';
import FrameWorks from '../components/skills/FrameWorks';
import Programming from '../components/skills/Programming';
import VersionControl from '../components/skills/VersionControl';
import Styling from '../components/skills/Styling';
import { pageVariantsAnim } from '../animation';
import GlobalStateContext from '../contextprovider/Context';
import { useContext } from 'react';

function Skills() {
	const { openSideBar, setOpenSideBar } = useContext(GlobalStateContext);

	return (
		<motion.div
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariantsAnim}
			onClick={() => setOpenSideBar(false)}
			className={`primary-theme dark:secondary-theme flex flex-col items-center justify-center px-4 pb-20 pb-8 pt-24 text-stone-50 md:pb-28 md:pt-32 lg:pb-36 ${
				openSideBar ? 'blur-sm filter' : ''
			}`}
		>
			<h2 className='mb-16 font-extrabold text-gray-800 dark:text-gray-100 md:mb-20 md:text-2xl lg:mb-28 lg:text-3xl'>
				TECHNICAL SKILLS
			</h2>
			<div className='space-y-20 md:space-y-28 lg:space-y-36'>
				<Programming />
				<Styling />
				<FrameWorks />
				<VersionControl />
			</div>
		</motion.div>
	);
}

export default Skills;
