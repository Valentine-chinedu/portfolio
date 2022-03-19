import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { FaCircle } from 'react-icons/fa';

const Theme = () => {
	const { theme, setTheme } = useTheme();
	const [toggledTheme, setToggledTheme] = useState(false);

	if (!toggledTheme) {
		setTheme('dark');
	} else {
		setTheme('light');
	}

	return (
		<div className='flex items-center lg:space-x-3'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-5 w-5 text-[#f9f5fc] md:h-6 md:w-6 lg:h-7 lg:w-7'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					p
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
				/>
			</svg>

			<div
				className={`mx-1 flex w-12 md:w-14 ${
					theme === 'light' ? 'justify-start' : 'justify-end'
				} rounded-3xl border border-fuchsia-500 text-black transition-all duration-1000 dark:border-[#00FFFF] dark:text-white`}
			>
				<button
					className='active:outline-none'
					onClick={() => setToggledTheme((prev) => !prev)}
				>
					<FaCircle className='text-sm lg:text-base' />
				</button>
			</div>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4 text-[#010e03] md:h-5 md:w-5 lg:h-6 lg:w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
				/>
			</svg>
		</div>
	);
};

export default Theme;
