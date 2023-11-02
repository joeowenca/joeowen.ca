'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { content } from './content';
import calculateScroll from '@/scripts/calculateScroll';
import profilePicture from '../../../public/profile-picture.jpg';

export default function Introduction() {
	const [alpha, setAlpha] = useState(0);

	function handleScroll() {
		setAlpha(calculateScroll());
	}

	useEffect(() => {
		setAlpha(calculateScroll());

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			style={{ top: alpha * -150 }}
			className={`${
				alpha === 1 ? 'hidden' : ''
			} fixed top-0 left-0 w-full h-full flex items-center justify-center -z-10 bg-vertical lg:bg-horizontal bg-cover bg-center`}
		>
			<div className="absolute bottom-0 left-0 w-full h-1/2 black-gradient-up"></div>
			<div style={{ opacity: 1 - alpha * 1.5, top: alpha * -50 }} className="relative w-full h-full flex flex-col items-center justify-center">
				<div className="flex flex-col lg:flex-row items-center justify-center h-1/2 grow-1">
					<Image
						src={profilePicture}
						alt="Profile picture"
						className="rounded-full w-36 lg:w-48"
					/>
					<h2 className="py-5 lg:p-12 font-serif text-4xl lg:text-6xl text-black">Joe Owen<small className="font-sans font-light text-2xl lg:text-3xl pl-2">.ca</small></h2>
				</div>
				<div className="flex items-center justify-center h-1/3 grow-1">
					<div className="max-w-prose p-3">
						<IntroParagraph>
							{content.introduction.summary}
						</IntroParagraph>
						<IntroParagraph>
							{content.introduction.collaborate}
						</IntroParagraph>
					</div>
				</div>
			</div>
			<pre className="fixed bottom-5 font-sans">
				{'Scroll to view more'}
			</pre>
		</div>
	);
}

type IntroParagraphProps = {
	children: string;
};

function IntroParagraph({ children }: IntroParagraphProps) {
	return (
		<pre style={{ textShadow: "0px 0px 5px black" }} className="p-2 mb-3 font-sans whitespace-normal">
			{children}
		</pre>
	);
}
