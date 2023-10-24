'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import { getPhotographyManifest, CategoryTypes } from './getPhotos';

export default function PhotographyContent() {
	const [manifest, setManifest] = useState<CategoryTypes>();

	async function handleGetPhotos() {
		const photographyManifest = await getPhotographyManifest();
		setManifest(photographyManifest);
	}

	useEffect(() => {
		handleGetPhotos();
	}, []);

	return (
		<>
			<Header />
			<Content title="Photography">
				<div>
					{manifest
						? manifest.children.length > 0
							? manifest.children.map((category, index) => (
									<p key={index}>{category.name}</p>
							  ))
							: null
						: null}
				</div>
			</Content>
			<Footer />
		</>
	);
}
