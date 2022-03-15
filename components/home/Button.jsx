import Link from 'next/link';

const Button = ({ link, name, as }) => {
	return (
		<Link href={link}>
			<a className='border-stone-70 dark:text-gray-10 rounded-md border-2 border-fuchsia-600 px-8 py-2 font-bold tracking-wider hover:bg-fuchsia-500 hover:text-gray-50 dark:border-[#00FFFF] dark:hover:bg-[#00FFFF] dark:hover:text-gray-800 md:text-xl'>
				{name}
			</a>
		</Link>
	);
};

export default Button;
