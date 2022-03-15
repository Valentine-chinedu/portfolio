import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillsDetails = ({ title, description, tags, animation, image }) => {
	return (
		<motion.div
			animate={animation}
			className='primary-theme dark:secondary-theme flex h-full w-full flex-col py-5 md:w-4/5 md:py-10 lg:w-4/6 lg:py-14 '
		>
			<div className='mb-4 flex w-full flex-col items-center md:mb-8 lg:mb-10'>
				<div className='mb-8 flex w-full items-center justify-center space-x-2 md:mb-12 md:space-x-4 lg:mb-14 lg:space-x-8'>
					<span className='h-0.5 w-20 bg-fuchsia-600 dark:bg-[#00FFFF] md:w-40 lg:w-60'></span>

					<h3 className='font-bold uppercase text-fuchsia-600 dark:text-[#00FFFF] md:text-xl lg:w-auto'>
						{title}
					</h3>
					<span className='h-0.5 w-20 bg-fuchsia-600 dark:bg-[#00FFFF] md:w-40 lg:w-60'></span>
				</div>
				<div className='relative mb-8 h-80 w-80 md:h-96 md:w-96'>
					<Image src={image} alt='profile picture' layout='fill' />
				</div>

				<p className='mb-6 w-full px-2 font-medium md:px-4 lg:w-4/5 lg:px-0'>
					{description}
				</p>
				<ul className=' w-full justify-center px-2 md:px-4 lg:flex lg:space-x-8'>
					{tags.map((tag) => (
						<li className='mb-2 bg-gray-800 p-1.5 text-sm font-semibold text-fuchsia-500 dark:text-[#00FFFF] lg:font-bold'>
							{tag}
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default SkillsDetails;
