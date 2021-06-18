import { skills } from "../../data";

function Skills() {
	return (
		<div
			id='skills'
			className='h-full w-full overflow-hidden mb-16 lg:mb-32 pt-8 text-gray-300 lg:container lg:mx-auto lg:px-80'
		>
			<div className='flex items-center justify-center mb-8 lg:mb-16'>
				<div className='bg-[#00ffff] h-[0.10rem] w-[7rem] md:w-[15rem] lg:w-[24.5rem]'></div>

				<span className='font-bold text-2xl text-gray-300 md:text-3xl mx-2 md:mx-4 md:space-x-8'>
					Skills
				</span>

				<div className='bg-[#00ffff] h-[0.10rem] w-[7rem] md:w-[15rem] lg:w-[24.5rem]'></div>
			</div>
			<div className='grid lg:grid-cols-4 lg:gap-4'>
				{skills.map((skill) => (
					<div key={skill._id} className='flex flex-col items-center space-y-2'>
						<img
							className='h-40 md:h-52 w-52 rounded-md'
							loading='lazy'
							src={skill.src}
							alt='logo'
						/>
						<h3 className='tracking-wider'>{skill.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
