'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import sportsShowcase from '../../../public/sports-showcase.jpg';
import landscapeShowcase from '../../../public/landscape-showcase.jpg';
import automotiveShowcase from '../../../public/automotive-showcase.jpg';
import calculateScrollAlpha from '@/scripts/calculateScrollAlpha';

export default function Showcase() {
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
			className={`flex justify-center p-3 ${
				alpha === 0 ? 'mt-[100vh]' : 'pt-[100vh]'
			}`}
			style={{ backgroundColor: `rgba(0, 0, 0, ${alpha})` }}
		>
			<div>
				<h1 className="p-3 text-center font-serif text-2xl">
					{'Photography'}
				</h1>
				<ShowcaseItem
					title="Sports"
					image={sportsShowcase}
					align="left"
				>
					I'm all about snapping shots of extreme sports like mountain
					biking and skiing because they get my heart racing just as
					much as the athletes. I'm not just a photographer – I'm out
					there in the action, vibing with fellow adventure junkies.
					What really gets me stoked is catching those epic,
					gravity-defying moments that make these sports a wild ride.
					Flip through my pics to join in on the excitement and
					adrenaline of extreme sports.
				</ShowcaseItem>
				<ShowcaseItem
					title="Landscapes"
					image={landscapeShowcase}
					align="right"
				>
					Landscape photography is my jam because it gets me out in
					the great outdoors, exploring the beauty of our world.
					Honestly, landscapes just look incredible, and I can't
					resist framing those stunning vistas. Whether it's chasing
					sunsets, hiking through mountains, or simply soaking in the
					serenity of nature, I'm all about capturing these
					breathtaking scenes and sharing their beauty with the world.
				</ShowcaseItem>
				<ShowcaseItem
					title="Automotive"
					image={automotiveShowcase}
					align="left"
				>
					I'm all about automotive photography because it's a ticket
					to an awesome community of people and some seriously cool
					rides. There's just something about capturing the unique
					character of cars that gets me going. Plus, I love helping
					folks preserve their pride and joy through my lens. So,
					whether it's meeting fellow car enthusiasts, photographing
					rare beauties, or immortalizing the essence of a car, I'm
					revved up and ready to roll.
				</ShowcaseItem>
			</div>
		</div>
	);
}

type ShowcaseItemProps = {
	title: string;
	image: StaticImageData;
	align: string;
	children: string;
};

function ShowcaseItem({ title, image, align, children }: ShowcaseItemProps) {
	return (
		<section className="flex flex-col lg:flex-row items-center p-2.5 pb-3 max-w-7xl">
			<Image
				className={`max-w-[65%] lg:max-w-sm lg:pb-0 pb-1  ${
					align === 'right' ? 'lg:order-last lg:pl-5' : 'lg:pr-5'
				}`}
				src={image}
				alt={`${title} showcase image`}
			/>
			<div className="max-w-prose">
				<h2 className="font-serif text-2xl py-3">{title}</h2>
				<pre className="font-sans whitespace-normal">{children}</pre>
			</div>
		</section>
	);
}
