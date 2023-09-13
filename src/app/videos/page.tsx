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
								title={video.title}
								image={video.thumbnail}
							>
								{video.description}
							</VideoItem>
						))
					) : (
						<p>No data available</p>
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
	children: string;
};

function VideoItem({ title, image, children }: VideoItemProps) {
	return (
		<section className="flex flex-col lg:flex-row items-center lg:px-2.5 pb-6 max-w-7xl">
			<Image
				className="max-w-[65%] lg:max-w-xs 3xl:max-w-sm lg:pb-0 pb-1 lg:pr-5"
				src={image.url}
				width={image.width}
				height={image.height}
				alt={`${title} thumbnail`}
			/>
			<div className="max-w-prose">
				<h2 className="font-serif text-xl py-3">{title}</h2>
				<pre className="font-sans whitespace-normal">{children}</pre>
			</div>
		</section>
	);
}
