'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import { getPhotos, CategoryTypes } from './getPhotos';

export default function PhotographyContent() {
	const [photoCategories, setPhotoCategories] = useState<CategoryTypes>();

	async function handleGetPhotos() {
		const response = await getPhotos();
		setPhotoCategories(response);
	}

	useEffect(() => {
		handleGetPhotos();
	}, []);

	return (
		<>
			<Header />
			<Content title="Photography">
				<div>
					{photoCategories
						? photoCategories.children.length > 0
							? photoCategories.children.map(
									(category, index) => (
										<p key={index}>{category.name}</p>
									),
							  )
							: null
						: null}
				</div>
			</Content>
			<Footer />
		</>
	);
}
