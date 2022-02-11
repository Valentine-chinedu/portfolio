import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillsDetails = ({ title, description, tags, animation, image }) => {
	return (
		<motion.div
			animate={animation}
			className='flex h-full w-full flex-col bg-amber-200/40 p-4 dark:bg-[#080827] md:w-4/5 md:py-10 lg:w-4/6 lg:py-14 '
		>
			<div>
				<div className='mb-4 flex w-full flex-col items-center md:mb-8 lg:mb-10'>
					<h3 className='mb-8 font-bold uppercase text-stone-700 dark:text-blue-50 md:text-xl lg:text-2xl'>
						{title}
					</h3>
					<div className='relative h-80 w-80 md:h-96 md:w-96'>
						<Image src={image} alt='profile picture' layout='fill' />
					</div>
				</div>
				<p className='mb-4 font-medium text-gray-900 dark:text-gray-200'>
					{description}
				</p>
				<ul className='lg:flex lg:space-x-4'>
					{tags.map((tag) => (
						<li className='mb-2 bg-gray-600 p-1.5 text-sm font-semibold dark:bg-gray-200 dark:text-gray-800 lg:font-bold'>
							{tag}
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default SkillsDetails;
