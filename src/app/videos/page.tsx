'use client';

import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';

import GetYouTubeVideos from './getYouTubeVideos';

export const metadata: Metadata = {
	title: 'Joe Owen | Videos',
};

export default function Videos() {
	const [videosList, setVideosList] = useState({});

	useEffect(() => {
		async function getData() {
			setVideosList(await GetYouTubeVideos());
		}

		getData();
	}, []);

	return (
		<>
			<Header page="videos" />
			<Content title="Videos">
				<pre className="font-sans whitespace-normal max-w-prose">
					This is the videos page.
				</pre>
			</Content>
			<Footer />
		</>
	);
}
