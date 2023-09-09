'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import sportsShowcase from '../../../public/sports-showcase.jpg';
import landscapeShowcase from '../../../public/landscape-showcase.jpg';
import automotiveShowcase from '../../../public/automotive-showcase.jpg';
import mountainBikingShowcase from '../../../public/mountain-biking-showcase.jpg';
import automotiveVideosShowcase from '../../../public/automotive-videos-showcase.jpg';
import skiingShowcase from '../../../public/skiing-showcase.jpg';
import calculateScrollAlpha from '@/scripts/calculateScrollAlpha';

export default function Showcase() {
	const [alpha, setAlpha] = useState(0);

	const sportsShowcaseSummary = `I'm all about snapping shots of extreme sports like mountain
	biking and skiing because they get my heart racing just as
	much as the athletes. I'm not just a photographer - I'm out
	there in the action, vibing with fellow adventure junkies.
	What really gets me stoked is catching those epic,
	gravity-defying moments that make these sports a wild ride.
	Flip through my pics to join in on the excitement and
	adrenaline of extreme sports.`;

	const landscapeShowcaseSummary = `Landscape photography is my jam because it gets me out in
	the great outdoors, exploring the beauty of our world.
	Honestly, landscapes just look incredible, and I can't
	resist framing those stunning vistas. Whether it's chasing
	sunsets, hiking through mountains, or simply soaking in the
	serenity of nature, I'm all about capturing these
	breathtaking scenes and sharing their beauty with the world.`;

	const automotiveShowcaseSummary = `I'm all about automotive photography because it's a ticket
	to an awesome community of people and some seriously cool
	rides. There's just something about capturing the unique
	character of cars that gets me going. Plus, I love helping
	folks preserve their pride and joy through my lens. So,
	whether it's meeting fellow car enthusiasts, photographing
	rare beauties, or immortalizing the essence of a car, I'm
	revved up and ready to roll.`;

	const mountainBikingShowcaseSummary = `I make mountain biking videos Oh yes I do. I make them when
	I ride. It's nice to use a GoPro because I don't even need
	to think about recording, I just do. This is why I like
	making Mountain Biking videos.`;

	const automotiveVideosShowcaseSummary = `Car videos! Oooh yes, how I've made a car video. There was a
	car, it was driving, and I was like, oh ya, let's video it. Before we knew it, a car video was born.`;

	const skiingShowcaseSummary = `Skiing sometimes. Sometimes take the GoPro with me. Put some music over top, and we got ourselves a skiing video.`;

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
			className={`flex justify-center p-3 ${
				alpha === 0 ? 'mt-[100vh]' : 'pt-[100vh]'
			}`}
			style={{ backgroundColor: `rgba(0, 0, 0, ${alpha})` }}
		>
			<div>
				<h1 className="p-3 text-center font-serif text-3xl">
					{'Photography'}
				</h1>
				<ShowcaseItem
					title="Sports"
					image={sportsShowcase}
					fill="false"
					align="left"
				>
					{sportsShowcaseSummary}
				</ShowcaseItem>
				<ShowcaseItem
					title="Landscapes"
					image={landscapeShowcase}
					fill="false"
					align="right"
				>
					{landscapeShowcaseSummary}
				</ShowcaseItem>
				<ShowcaseItem
					title="Automotive"
					image={automotiveShowcase}
					fill="false"
					align="left"
				>
					{automotiveShowcaseSummary}
				</ShowcaseItem>

				<h1 className="p-3 text-center font-serif text-3xl">
					{'Videos'}
				</h1>
				<ShowcaseItem
					title="Mountain biking"
					image={mountainBikingShowcase}
					fill="true"
					align="left"
				>
					{mountainBikingShowcaseSummary}
				</ShowcaseItem>
				<ShowcaseItem
					title="Automotive"
					image={automotiveVideosShowcase}
					fill="true"
					align="left"
				>
					{automotiveVideosShowcaseSummary}
				</ShowcaseItem>
				<ShowcaseItem
					title="Skiing"
					image={skiingShowcase}
					fill="true"
					align="left"
				>
					{skiingShowcaseSummary}
				</ShowcaseItem>
			</div>
		</div>
	);
}

type ShowcaseItemProps = {
	title: string;
	image: StaticImageData;
	fill: string;
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
		<section className="flex flex-col lg:flex-row items-center px-2.5 py-3 max-w-7xl">
			<Image
				className={`lg:max-w-sm lg:pb-0 pb-1 ${
					fill === 'true' ? '' : 'max-w-[65%]'
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
