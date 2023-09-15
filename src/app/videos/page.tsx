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

	function getVideoId() {
		const url = new URL(window.location.href);
		const searchParams = url.searchParams;

		return searchParams.get('v');
	}

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
					<div className="w-full pb-6">
						<iframe
							className="w-full aspect-video"
							src={`https://www.youtube.com/embed/${
								getVideoId() || 'XwHneLWFkhY'
							}?autoplay=${
								getVideoId() === null ? '0' : '1'
							}&rel=0`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen={true}
						></iframe>
					</div>
					{videosList.length > 0 ? (
						videosList.map((video: any) => (
							<VideoItem
								title={`${video.title
									.replace(/&#39;/g, "'")
									.substring(0, 50)}${
									video.title.length >= 50 ? '...' : ''
								}`}
								image={video.thumbnail}
								age={video.age}
								id={video.id}
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
	id: string;
	children: string;
};

function VideoItem({ title, image, age, id, children }: VideoItemProps) {
	return (
		<section className="flex flex-col lg:flex-row items-center lg:px-2.5 pb-6 max-w-7xl">
			<Image
				className="aspect-video object-cover max-w-[80%] xs:max-w-sm 3xl:max-w-sm lg:mb-0 mb-1 lg:mr-5"
				src={image.url}
				width={image.width}
				height={image.height}
				alt={`${title} thumbnail`}
			/>
			<div className="max-w-prose grow relative">
				<h2 className="font-serif text-xl py-3">{title}</h2>
				<pre className="font-sans whitespace-normal">{children}</pre>
				<div className="flex items-center">
					<button
						onClick={() =>
							(window.location.href = `/videos/?v=${id}`)
						}
						className="icon-play bg-custom-blue hover:bg-custom-light-blue transition-colors px-4 py-3 my-3"
					>
						Watch
					</button>
					<pre className="font-sans whitespace-normal pl-3">
						{age}
					</pre>
				</div>
			</div>
		</section>
	);
}
