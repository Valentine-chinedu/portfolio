import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import LandingPage from "../components/LandingPage";
import SideMenu from "../components/SideMenu";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/project/Projects";
import Contact from "../components/Contact";
import Social from "../components/Social";

import { AiOutlineMenu } from "react-icons/ai";
// import { ImArrowUp } from "react-icons/im";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

export default function Home() {
	const [openSideBar, setOpenSideBar] = useState(false);
	const [hideOnScroll, setHideOnScroll] = useState(true);

	useScrollPosition(
		({ prevPos, currPos }) => {
			const isShow = currPos.y > prevPos.y;
			if (isShow !== hideOnScroll) setHideOnScroll(isShow);
		},
		[hideOnScroll],
		false,
		false,
		300
	);

	return (
		<div className='font-sans overflow-hidden bg-[#15022b] z-20 h-full w-full '>
			<Head>
				<title>Valentine Okosi C.</title>
				<link rel='icon' href='/favicon-32x32.png' />
			</Head>

			<header className='h-screen w-full'>
				<nav
					className={`fixed flex justify-between items-center z-40 w-full px-6 transition-height ease-in-out duration-500 overflow-hidden bg-[#0e001b] bg-opacity-30 ${
						hideOnScroll ? "h-[4.5rem]" : "h-0"
					}`}
				>
					<a href='#home' className='flex '>
						<img
							className='h-8 md:h-10'
							src='/portfolio_logo.png'
							alt='logo'
							loading='lazy'
						/>
					</a>
					<div className='hidden lg:flex h-full justify-around w-[35rem] text-sm'>
						<Rotate duration={1000} delay={1000}>
							<a href='#about' className='flex items-center space-x-1 group'>
								<p className='text-[#00ffff] font-medium font-mono'>01.</p>
								<h2 className='text-gray-200 font-semibold tracking-wider group-hover:border-b border-[#00ffff]'>
									About
								</h2>
							</a>
							<a href='#skills' className='flex items-center space-x-1 group'>
								<p className='text-[#00ffff] font-medium font-mono'>02.</p>
								<h2 className='text-gray-200 font-semibold tracking-wider group-hover:border-b border-[#00ffff]'>
									Skills
								</h2>
							</a>
							<a href='#projects' className='flex items-center space-x-1 group'>
								<p className='text-[#00ffff] font-medium font-mono'>03.</p>
								<h2 className='text-gray-200 font-semibold tracking-wider group-hover:border-b border-[#00ffff] '>
									Projects
								</h2>
							</a>
							<a href='#contact' className='flex items-center space-x-1 group'>
								<p className='text-[#00ffff] font-medium font-mono'>04.</p>
								<h2 className='text-gray-200 font-semibold tracking-wider group-hover:border-b border-[#00ffff] '>
									Contact
								</h2>
							</a>
							<div className='flex items-center'>
								<a
									href='/resume.pdf'
									target='_blank'
									className=' border-solid border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:bg-opacity-20 rounded px-4 py-2 font-semibold focus:outline-none'
								>
									Resume
								</a>
							</div>
						</Rotate>
					</div>
					<div
						onClick={() => {
							setOpenSideBar(true);
						}}
						className='lg:hidden relative left-1 cursor-pointer'
					>
						<AiOutlineMenu className='text-4xl text-[#00ffff]' />
					</div>
				</nav>
				<SideMenu openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
				<LandingPage openSideBar={openSideBar} />
			</header>

			{/* close sidebar on screen touch/click */}
			{openSideBar && (
				<div
					onClick={() => {
						setOpenSideBar(false);
					}}
					className='fixed h-full inset-0 z-40'
				></div>
			)}

			<main
				className={`overflow-hidden ${openSideBar ? "filter blur-sm" : ""}`}
			>
				<Fade bottom duration={1000}>
					<About openSideBar={openSideBar} />
					<Skills openSideBar={openSideBar} />
					<Projects openSideBar={openSideBar} />
				</Fade>
			</main>
			<footer
				className={`lg:container lg:mx-auto lg:px-80 lg:pt-4 text-gray-300 ${
					openSideBar ? "filter blur-sm" : ""
				}`}
			>
				<Contact />
				<Social />
				<div className='flex w-full justify-center mb-2 text-sm md:text-base'>
					<p>Built with Nextjs and Tailwindcss</p>
				</div>
				<div className='flex w-full justify-center text-sm md:text-base mb-4 md:mb-8'>
					<p>Design inspired by Brittany Chiang</p>
				</div>
			</footer>
		</div>
	);
}
