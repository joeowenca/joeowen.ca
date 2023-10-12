'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { content } from './content';
import calculateScrollAlpha from '@/scripts/calculateScrollAlpha';
import profilePicture from '../../../public/profile-picture.jpg';

export default function Introduction() {
	const [alpha, setAlpha] = useState(0);

	function handleScroll() {
		setAlpha(calculateScrollAlpha());
	}

	useEffect(() => {
		setAlpha(calculateScrollAlpha());

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`${
				alpha === 1 ? 'hidden' : ''
			} fixed top-0 left-0 w-full h-full flex items-center justify-center -z-10 bg-vertical lg:bg-horizontal bg-cover bg-center`}
		>
			<div className="flex flex-col items-center p-3">
				<Image
					src={profilePicture}
					alt="Profile picture"
					className="rounded-full w-28"
				/>
				<h2 className="p-3 font-serif text-2xl text-black">Joe Owen</h2>
				<div className="max-w-prose">
					<IntroParagraph>
						{content.introduction.summary}
					</IntroParagraph>
					<IntroParagraph>
						{content.introduction.collaborate}
					</IntroParagraph>
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
		<pre className="p-2 mb-3 font-sans whitespace-normal bg-black/75">
			{children}
		</pre>
	);
}
