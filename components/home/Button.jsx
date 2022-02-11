import Link from 'next/link';

const Button = ({ link, name }) => {
	return (
		<Link href={link}>
			<a className='border-stone-70 dark:text-gray-10 rounded-md border-2 border-cyan-400 px-8 py-2 font-bold tracking-wider shadow-md shadow-gray-500 transition-all duration-700 md:text-xl lg:hover:text-2xl'>
				{name}
			</a>
		</Link>
	);
};

export default Button;
