'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type NavigationProps = {
	color: number;
};

export default function Navigation({ color }: NavigationProps) {
	const [showNav, setShowNav] = useState(false);

	function toggleNav() {
		setShowNav(!showNav);
	}

	return (
		<>
			<NavMenu color={color} className="hidden lg:flex" />
			<div
				className={`${
					showNav
						? 'opacity-100 pointer-events-true'
						: 'opacity-0 pointer-events-none'
				} lg:hidden transition-opacity duration-300 flex flex-col justify-center fixed top-0 left-0 w-full h-full bg-custom-blue/95`}
			>
				<NavMenuButton
					icon="icon-close"
					display={showNav}
					onClick={toggleNav}
				/>
				<NavMenu />
			</div>
			<div style={{ color: `rgb(${color}, ${color}, ${color})` }}>
				<NavMenuButton
					icon="icon-nav"
					display={!showNav}
					onClick={toggleNav}
				/>
			</div>
		</>
	);
}

type NavMenuButtonProps = {
	icon: string;
	display: boolean;
	onClick: Function;
};

function NavMenuButton({ icon, display, onClick }: NavMenuButtonProps) {
	return (
		<div
			onClick={() => onClick()}
			className={`${
				display ? '' : 'hidden'
			} ${icon} transition-opacity duration-1000 absolute top-0 right-0 p-5 text-3xl lg:hidden`}
		></div>
	);
}

type NavMenuProps = {
	color?: number;
	className?: string;
};

function NavMenu({ color, className }: NavMenuProps) {
	return (
		<div
			className={`select-none flex flex-col lg:flex-row items-center lg:items-start lg:absolute lg:right-0 lg:w-1/2 ${className}`}
			style={{ color: `rgb(${color}, ${color}, ${color})` }}
		>
			<div className="flex flex-col lg:flex-row items-center lg:items-start pb-5 lg:pb-0 lg:-translate-x-[50%]">
				<NavLink page="/">Home</NavLink>
				<NavLink page="/photography">Photography</NavLink>
				<NavLink page="/videos">Videos</NavLink>
				<NavLink page="/music">Music</NavLink>
				<NavLink page="/projects">Projects</NavLink>
			</div>
			<div className="lg:absolute lg:right-0 lg:mr-5">
				<SocialLink
					icon="instagram"
					link="https://www.instagram.com/joeowen.ca/"
				/>
				<SocialLink
					icon="youtube"
					link="https://www.youtube.com/@joeowen_mtb"
				/>
				<SocialLink
					icon="soundcloud"
					link="https://soundcloud.com/sas-areku"
				/>
				<SocialLink icon="github" link="https://github.com/Sas-Areku" />
			</div>
		</div>
	);
}

type NavLinkProps = {
	children: string;
	page: string;
};

function NavLink({ children, page }: NavLinkProps) {
	const [active, setActive] = useState(false);

	useEffect(() => {
		setActive(window.location.pathname === page);
	}, []);

	return (
		<div
			className={`p-1 px-2 text-xl hover:opacity-100 transition-opacity
		${active ? 'opacity-100' : 'lg:opacity-50'}`}
		>
			<Link href={page}>{children}</Link>
		</div>
	);
}

type SocialLinkProps = {
	icon: string;
	link: string;
};

function SocialLink({ icon, link }: SocialLinkProps) {
	return (
		<Link
			href={link}
			target="_blank"
			className={`px-2.5 text-xl lg:opacity-50 hover:opacity-100 transition-opacity icon-${icon}`}
		/>
	);
}
