import { skills } from "../../data";

function Skills() {
	return (
		<div
			id='skills'
			className='h-full w-full overflow-hidden mb-16 lg:mb-32 pt-8 text-gray-300 lg:container lg:mx-auto lg:px-80'
		>
			<div className='flex items-center justify-center mb-8 lg:mb-16'>
				<div className='bg-[#00ffff] h-[0.10rem] w-[8.5rem] md:w-[17.5rem] lg:w-[24.5rem]'></div>

				<span className='font-bold text-2xl text-gray-100 md:text-3xl mx-2 md:mx-4 md:space-x-8'>
					Skills
				</span>

				<div className='bg-[#00ffff] h-[0.10rem] w-[8.5rem] md:w-[17.5rem] lg:w-[24.5rem]'></div>
			</div>
			<div className='grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4 md:px-7'>
				{skills.map((skill) => (
					<div
						key={skill._id}
						className='flex flex-col items-center space-y-2 mb-4'
					>
						<img
							className='h-32 md:h-40 lg:h-52 lg:w-52 rounded-md'
							loading='lazy'
							src={skill.src}
							alt='logo'
						/>
						<h3 className='tracking-wider text-gray-200'>{skill.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
