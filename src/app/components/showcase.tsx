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
					id="sports-showcase"
					title="Sports"
					image={sportsShowcase}
					link="/photography"
				>
					{content.showcase.summary.photography.sports}
				</ShowcaseItem>
				<ShowcaseItem
					id="landscapes-showcase"
					title="Landscapes"
					image={landscapeShowcase}
					link="/photography"
				>
					{content.showcase.summary.photography.landscapes}
				</ShowcaseItem>
				<ShowcaseItem
					id="automotive-showcase"
					title="Automotive"
					image={automotiveShowcase}
					link="/photography"
				>
					{content.showcase.summary.photography.automotive}
				</ShowcaseItem>
				<ShowcaseItem
					id="mountain-bike-videos-showcase"
					title="Mountain biking videos"
					image={mountainBikingShowcase}
					link="/videos"
				>
					{content.showcase.summary.videos.mountainbiking}
				</ShowcaseItem>
				<ShowcaseItem
					id="automotive-videos-showcase"
					title="Automotive videos"
					image={automotiveVideosShowcase}
					link="/videos"
				>
					{content.showcase.summary.videos.automotive}
				</ShowcaseItem>
				<ShowcaseItem
					id="skiing-videos-showcase"
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
	id: string;
	title: string;
	image: StaticImageData;
	link: string;
	children: string;
};

function ShowcaseItem({ id, title, image, link, children }: ShowcaseItemProps) {
	const [position, setPosition] = useState<number>();

	function handleScroll() {
		const element = document.getElementById(id);

		if (element) {
			const elementRect = element.getBoundingClientRect();
			setPosition((elementRect.top / 10) * -1);
		} else {
			console.log('Element not found.');
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section id={id} className="relative">
			<Image
				className="w-[100vw] h-[100vh] aspect-video object-cover"
				src={image}
				alt={`${title} showcase image`}
			/>
			<div className="absolute top-0 h-full w-full lg:w-1/2 p-3 lg:p-10 flex justify-center lg:items-center black-gradient">
				<div
					style={{ top: position }}
					className="relative flex flex-col items-center lg:items-start max-w-prose mt-auto lg:mt-0 pb-20 lg:pb-5 lg:pb-0 z-10"
				>
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
