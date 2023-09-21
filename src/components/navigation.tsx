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
		<div
			className="items-center w-1/2 ml-auto"
			style={{ color: `rgb(${color}, ${color}, ${color})` }}
			onClick={() => (showNav ? toggleNav() : '')}
		>
			<div
				className={`lg:hidden icon-nav text-3xl px-3 float-right ${
					showNav ? 'hidden' : ''
				}`}
				onClick={() => toggleNav()}
			></div>
			<div
				className={`lg:flex items-center ${
					showNav
						? 'flex transition-opacity opacity-100 bg-custom-blue/95 text-white flex-col justify-center fixed top-0 left-0 w-full h-full'
						: 'hidden'
				}`}
			>
				<div
					className={`icon-close text-3xl px-6 absolute top-5 right-0 ${
						showNav ? '' : 'hidden'
					}`}
					onClick={() => toggleNav()}
				></div>
				<div
					className={`flex ${
						showNav
							? 'flex-col items-center pb-8'
							: 'flex-row items-start pb-0 -translate-x-1/2'
					} `}
				>
					<NavLink page="/">Home</NavLink>
					<NavLink page="/photography">Photography</NavLink>
					<NavLink page="/videos">Videos</NavLink>
					<NavLink page="/music">Music</NavLink>
					<NavLink page="/projects">Projects</NavLink>
				</div>
				<div className={`flex ${showNav ? '' : 'absolute right-4'}`}>
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
					<SocialLink
						icon="github"
						link="https://github.com/Sas-Areku"
					/>
				</div>
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
	});

	return (
		<div
			className={`p-1 px-2 text-xl hover:opacity-100 transition-opacity
		${active ? 'opacity-100' : 'lg:opacity-75'}`}
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
			className={`px-2.5 text-xl lg:opacity-75 hover:opacity-100 transition-opacity icon-${icon}`}
		/>
	);
}
