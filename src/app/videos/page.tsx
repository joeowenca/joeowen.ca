'use client';

import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import Image from 'next/image';

import GetYouTubeVideos from './getYouTubeVideos';

export const metadata: Metadata = {
	title: 'Joe Owen | Videos',
};

export default function Videos() {
	const [videosList, setVideosList] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = await GetYouTubeVideos();
			setVideosList(data);
		}

		getData();
	}, []);

	return (
		<>
			<Header page="videos" />
			<Content title="Videos">
				<div>
					{videosList.length > 0 ? (
						videosList.map((video) => (
							<VideoItem
								title={`${video.title
									.replace(/&#39;/g, "'")
									.substring(0, 50)}${
									video.title.length >= 50 ? '...' : ''
								}`}
								image={video.thumbnail}
								age={video.age}
							>
								{video.description.replace(/&#39;/g, "'")}
							</VideoItem>
						))
					) : (
						<p>Loading videos...</p>
					)}
				</div>
			</Content>
			<Footer />
		</>
	);
}

type VideoItemProps = {
	title: string;
	image: any;
	age: string;
	children: string;
};

function VideoItem({ title, image, age, children }: VideoItemProps) {
	return (
		<section className="flex flex-col lg:flex-row items-center lg:px-2.5 pb-6 max-w-7xl">
			<Image
				className="max-w-[65%] lg:max-w-xs 3xl:max-w-sm lg:mb-0 mb-1 lg:mr-5"
				src={image.url}
				width={image.width}
				height={image.height}
				alt={`${title} thumbnail`}
			/>
			<div className="max-w-prose grow relative">
				<h2 className="font-serif text-xl py-3">{title}</h2>
				<pre className="font-sans whitespace-normal">{children}</pre>
				<button className="icon-play bg-custom-blue hover:bg-custom-light-blue transition-colors px-4 py-3 my-3">
					Watch
				</button>
			</div>
		</section>
	);
}
