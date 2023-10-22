'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import getPhotos from './getPhotos';

export default function PhotographyContent() {
	const [photos, setPhotos] = useState();

	async function handleGetPhotos() {
		const response = await getPhotos();
		setPhotos(response);
	}

	useEffect(() => {
		handleGetPhotos();
	}, []);

	return (
		<>
			<Header />
			<Content title="Photography">
				<pre className="font-sans whitespace-normal max-w-prose mb-[100vh]">
					Coming soon.
				</pre>
			</Content>
			<Footer />
		</>
	);
}
