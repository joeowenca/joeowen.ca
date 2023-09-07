'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type NavigationProps = {
	color: number;
};

export default function Navigation({ color }: NavigationProps) {
	return (
		<>
			<div
				className="flex items-center w-1/2 ml-auto"
				style={{ color: `rgb(${color}, ${color}, ${color})` }}
			>
				<div className="flex -translate-x-1/2">
					<NavLink page="/">Home</NavLink>
					<NavLink page="/photography">Photography</NavLink>
					<NavLink page="/videos">Videos</NavLink>
					<NavLink page="/music">Music</NavLink>
					<NavLink page="/projects">Projects</NavLink>
				</div>
				<div className="flex pr-6 absolute right-0">
					<SocialLink
						icon="instagram"
						link="https://www.instagram.com/joeowen.ca/"
					/>
					<SocialLink
						icon="youtube"
						link="https://www.youtube.com/channel/UC-yxAw4mE3ZfLfRlolRmUSA"
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
		</>
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
			className={`p-2 text-lg hover:opacity-100 transition-opacity
		${active ? 'opacity-100' : 'opacity-75'}`}
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
		<a href={link} target="_blank">
			<div
				className={`p-1.5 opacity-75 hover:opacity-100 icon-${icon}`}
			></div>
		</a>
	);
}
