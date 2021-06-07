import Head from "next/head";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Intro from "../components/Intro";
import DropDown from "../components/DropDown";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/project/Projects";

export default function Home() {
	const [visible, setVisible] = useState(true);

	const [openSideBar, setOpenSideBar] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className=' font-serif bg-[#1E2640] overflow-hidden'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='relative h-screen'>
				<nav
					className={`fixed flex justify-between items-center z-40 w-full px-6 transition-height ease-in-out duration-500 overflow-hidden bg-[#03011a] ${
						visible ? "h-[4.5rem]" : "h-0"
					}`}
				>
					<div>logo</div>
					<div
						onClick={() => {
							setOpenSideBar(true);
						}}
						className=''
					>
						<AiOutlineMenu className='text-4xl text-blue-400' />
					</div>
				</nav>
				<DropDown openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
				<Intro />
			</header>
			<div
				onClick={() => {
					setOpenSideBar(true);
				}}
				className={`fixed z-40 bottom-4 right-4 bg-gray-200 p-1 bg-opacity-10 ${
					visible ? "invisible" : ""
				}`}
			>
				<AiOutlineMenu className='text-3xl text-blue-400' />
			</div>
			<mai className=''>
				<About />
				<Skills />
				<Projects />
			</mai>
		</div>
	);
}
