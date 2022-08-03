import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

const HomeDetails = ({ animation, title, details, link, as, image, name }) => {
	return (
		<motion.div
			animate={animation}
			className='flex w-[90%] flex-col items-center justify-center  md:w-4/5 md:py-10 lg:w-4/6 lg:py-14'
		>
			<div className='flex w-full items-center justify-center space-x-2 md:space-x-4 lg:space-x-8'>
				<span className='h-0.5 w-20 bg-[#00FFFF] md:w-40 lg:w-60'></span>
				<h2 className='font-bold uppercase text-[#00FFFF] md:text-lg lg:text-xl'>
					{title}
				</h2>
				<span className='h-0.5 w-20 bg-[#00FFFF] md:w-40 lg:w-60'></span>
			</div>
			<div className='relative h-80 w-80 md:h-96 md:w-96'>
				<Image src={image} alt='profile picture' layout='fill' />
			</div>
			<p className='mb-8 px-8 font-medium md:text-lg lg:w-4/5 lg:text-lg'>
				{details}
			</p>
			<Button link={link} name={name} />
		</motion.div>
	);
};

export default HomeDetails;
