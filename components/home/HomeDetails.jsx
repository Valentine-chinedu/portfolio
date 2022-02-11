import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

const HomeDetails = ({ animation, title, details, link, image, name }) => {
	return (
		<motion.div
			animate={animation}
			className='flex w-[90%] flex-col items-center justify-center bg-amber-200/40 py-5 dark:bg-[#080827] md:w-4/5 md:py-10 lg:w-4/6 lg:py-14'
		>
			<h2 className='font-serif font-bold uppercase text-stone-700 dark:text-blue-50 md:text-xl'>
				{title}
			</h2>
			<div className='relative h-80 w-80 md:h-96 md:w-96'>
				<Image src={image} alt='profile picture' layout='fill' />
			</div>
			<p className='mb-8 px-8 font-medium md:text-lg lg:text-xl '>{details}</p>
			<Button link={link} name={name} />
		</motion.div>
	);
};

export default HomeDetails;
