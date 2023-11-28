'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import path from 'path';

type CategoryItemProps = {
	id: string;
	category: string;
	image: StaticImageData;
};

export default function CategoryItem({
	id,
	category,
	image,
}: CategoryItemProps) {
	const [position, setPosition] = useState<number>();
	const router = useRouter();

	function handleClick() {
		router.push(`/photography/${category.toLowerCase()}`);
	}

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
				alt={`${category} showcase image`}
			/>
			<div className="absolute bottom-0 h-1/2 w-full p-3 lg:p-10 flex justify-center items-center black-gradient-up">
				<div
					style={{ top: position }}
					className="relative flex flex-col justify-center items-center lg:mt-0 pb-16 translate-y-20 z-10"
				>
					<h1
						style={{ textShadow: '0px 0px 10px black' }}
						className="font-serif text-3xl lg:text-5xl py-3"
					>
						{category}
					</h1>
					<div
						onClick={handleClick}
						className="bg-custom-blue hover:bg-custom-light-blue cursor-pointer select-none transition-colors px-4 py-3 my-3"
					>
						View more
					</div>
				</div>
			</div>
		</section>
	);
}
