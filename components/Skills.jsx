import { skills } from '../data';
import Image from 'next/image';

function Skills() {
	return (
		<div
			id='skills'
			className='h-full w-full text-gray-300 overflow-hidden mb-20 lg:mb-32 pt-8 lg:container px-6 md:px-7 lg:mx-auto lg:px-80'
		>
			<div className='flex items-center mb-8 md:mb-12 md:ml-5 lg:ml-0 lg:justify-start text-xl md:text-3xl'>
				<div className='text-[#00ffff] lg:text-xl font-mono'>03.</div>

				<span className='font-bold ml-2 mr-3 md:ml-4 md:mr-5 '>
					Skills and Tools
				</span>

				{/* <div className='bg-[#00ffff] h-[0.10rem] w-[11.5rem] md:w-[27.5rem] lg:w-[23rem]'></div> */}
			</div>
			<div className='grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4 '>
				{skills.map((skill) => (
					<div
						key={skill._id}
						className='flex flex-col items-center space-y-2 mb-4 overflow-hidden'
					>
						<Image
							className='rounded-md'
							src={skill.src}
							alt='logo'
							width={128}
							height={128}
							reponsive
						/>
						{/* <img
							className='h-32 md:h-40 lg:h-52 lg:w-52 rounded-md'
							loading='lazy'
							src={skill.src}
							alt='logo'
						/> */}
						<h3 className='tracking-wider'>{skill.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
