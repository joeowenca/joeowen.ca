'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { content } from './content';
import sportsShowcase from '../../../public/sports-showcase.jpg';
import landscapeShowcase from '../../../public/landscape-showcase.jpg';
import automotiveShowcase from '../../../public/automotive-showcase.jpg';
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
			className={`flex justify-center p-3 ${
				alpha === 0 ? 'mt-[100vh]' : 'pt-[100vh]'
			}`}
			style={{ backgroundColor: `rgba(0, 0, 0, ${alpha})` }}
		>
			<div>
				<h1 className="p-5 text-center font-serif text-2xl">
					{'Photography'}
				</h1>
				<ShowcaseItem
					title="Sports"
					image={sportsShowcase}
					fill={false}
					align="left"
				>
					{content.showcase.summary.photography.sports}
				</ShowcaseItem>
				<ShowcaseItem
					title="Landscapes"
					image={landscapeShowcase}
					fill={false}
					align="right"
				>
					{content.showcase.summary.photography.landscapes}
				</ShowcaseItem>
				<ShowcaseItem
					title="Automotive"
					image={automotiveShowcase}
					fill={false}
					align="left"
				>
					{content.showcase.summary.photography.automotive}
				</ShowcaseItem>

				<h1 className="p-5 text-center font-serif text-2xl">
					{'Videos'}
				</h1>
				<ShowcaseItem
					title="Mountain biking"
					image={mountainBikingShowcase}
					fill={true}
					align="left"
				>
					{content.showcase.summary.videos.mountainbiking}
				</ShowcaseItem>
				<ShowcaseItem
					title="Automotive"
					image={automotiveVideosShowcase}
					fill={true}
					align="left"
				>
					{content.showcase.summary.videos.automotive}
				</ShowcaseItem>
				<ShowcaseItem
					title="Skiing"
					image={skiingShowcase}
					fill={true}
					align="left"
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
	fill: boolean;
	align: string;
	children: string;
};

function ShowcaseItem({
	title,
	image,
	fill,
	align,
	children,
}: ShowcaseItemProps) {
	return (
		<section className="flex flex-col lg:flex-row items-center lg:px-2.5 pb-6 max-w-7xl">
			<Image
				className={`lg:max-w-xs 3xl:max-w-sm lg:pb-0 pb-1 ${
					fill ? 'max-w-[80%] xs:max-w-sm' : 'max-w-[65%] xs:max-w-xs'
				} ${align === 'right' ? 'lg:order-last lg:pl-5' : 'lg:pr-5'}`}
				src={image}
				alt={`${title} showcase image`}
			/>
			<div className="max-w-prose">
				<h2 className="font-serif text-2xl py-3">{title}</h2>
				<pre className="font-sans whitespace-normal">{children}</pre>
				<button className="bg-custom-blue hover:bg-custom-light-blue transition-colors px-4 py-3 my-3">
					View more
				</button>
			</div>
		</section>
	);
}
