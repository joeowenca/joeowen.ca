'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { content } from './content';
import sportsShowcase from '../../../public/sports-showcase-long-2.jpg';
import landscapeShowcase from '../../../public/landscape-showcase-long.jpg';
import automotiveShowcase from '../../../public/automotive-showcase-long.jpg';
import mountainBikingShowcase from '../../../public/mountain-biking-showcase.jpg';
import automotiveVideosShowcase from '../../../public/automotive-videos-showcase.jpg';
import skiingShowcase from '../../../public/skiing-showcase.jpg';
import calculateScroll from '@/scripts/calculateScroll';

export default function Showcase() {
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
			className={`flex justify-center ${
				alpha === 0 ? 'mt-[100vh]' : 'pt-[100vh]'
			}`}
			style={{ backgroundColor: `rgba(0, 0, 0, ${alpha})` }}
		>
			<div>
				<ShowcaseItem
					title="Sports"
					image={sportsShowcase}
					link="/photography"
				>
					{content.showcase.summary.photography.sports}
				</ShowcaseItem>
				<ShowcaseItem
					title="Landscapes"
					image={landscapeShowcase}
					link="/photography"
				>
					{content.showcase.summary.photography.landscapes}
				</ShowcaseItem>
				<ShowcaseItem
					title="Automotive"
					image={automotiveShowcase}
					link="/photography"
				>
					{content.showcase.summary.photography.automotive}
				</ShowcaseItem>
				<ShowcaseItem
					title="Mountain biking videos"
					image={mountainBikingShowcase}
					link="/videos"
				>
					{content.showcase.summary.videos.mountainbiking}
				</ShowcaseItem>
				<ShowcaseItem
					title="Automotive videos"
					image={automotiveVideosShowcase}
					link="/videos"
				>
					{content.showcase.summary.videos.automotive}
				</ShowcaseItem>
				<ShowcaseItem
					title="Skiing videos"
					image={skiingShowcase}
					link="/videos"
				>
					{content.showcase.summary.videos.skiing}
				</ShowcaseItem>
			</div>
		</div>
	);
}

type ShowcaseItemProps = {
	title: string;
	image: StaticImageData;
	link: string;
	children: string;
};

function ShowcaseItem({ title, image, link, children }: ShowcaseItemProps) {
	return (
		<section className="relative">
			<Image
				className="w-[100vw] h-[100vh] aspect-video object-cover"
				src={image}
				alt={`${title} showcase image`}
			/>
			<div className="absolute top-0 h-full w-full lg:w-1/2 p-3 lg:p-10 flex justify-center lg:items-center black-gradient">
				<div className="flex flex-col items-center lg:items-start max-w-prose mt-auto lg:mt-0 pb-5 lg:pb-0 z-10">
					<h2 className="font-serif text-3xl lg:text-4xl py-3">
						{title}
					</h2>
					<pre className="font-sans whitespace-normal [text-shadow:_0_0_5px_black]">
						{children}
					</pre>
					<button
						onClick={() => (window.location.href = link)}
						className="bg-custom-blue hover:bg-custom-light-blue transition-colors px-4 py-3 my-3"
					>
						View more
					</button>
				</div>
			</div>
		</section>
	);
}
