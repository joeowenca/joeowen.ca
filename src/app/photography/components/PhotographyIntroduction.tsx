'use client';

import { useState, useEffect } from 'react';
import calculateScroll from '@/scripts/calculateScroll';

export default function PhotographyIntroduction() {
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
			<div
				style={{ opacity: 1 - alpha * 1.5, top: alpha * -50 }}
				className="relative w-full h-full flex flex-col items-center justify-center"
			>
				<h2 className="font-serif text-3xl lg:text-6xl">Photography</h2>
			</div>
			<pre className="fixed bottom-5 font-sans">
				{'Scroll to view more'}
			</pre>
		</div>
	);
}
