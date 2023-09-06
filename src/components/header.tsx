'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePicture from '../../public/profile-picture.jpg';
import calculateScrollAlpha from '@/scripts/calculateScrollAlpha';

export default function Header() {
	const [color, setColor] = useState(0);

	function handleScroll() {
		setColor(calculateScrollAlpha() * 255);
	}

	useEffect(() => {
		setColor(calculateScrollAlpha() * 255);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 flex items-center w-screen max-h-20 p-3 z-50 ${
				color === 255 ? 'bg-black' : ''
			}`}
		>
			<div className="flex items-center">
				<Image
					src={profilePicture}
					alt="Profile picture"
					className="rounded-full w-14"
				/>
				<h1
					className="pl-3 font-serif text-2xl"
					style={{ color: `rgb(${color}, ${color}, ${color})` }}
				>
					Joe Owen
				</h1>
			</div>
		</div>
	);
}
