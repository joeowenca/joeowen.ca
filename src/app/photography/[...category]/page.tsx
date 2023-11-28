import Image from 'next/image';
import { getPhotographyManifest, CategoryTypes } from '../getPhotos';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import findCategory from './scripts/findCategory';
import getCategoryImages from './scripts/getCategoryImages';
import getCategories from './scripts/getCategories';

type CategoryProps = {
	params: {
		category: string[];
	};
};

export default async function Category({ params }: CategoryProps) {
	const categoryPath = '/' + params.category.join('/');
	const manifest: CategoryTypes = await getPhotographyManifest();
	const category = findCategory(manifest, categoryPath);
	const categories = getCategories(category);
	const images = getCategoryImages(category);

	return (
		<>
			<Header />
			<Content title={category ? category.name : 'Photography'}>
				<div className="flex flex-col w-full justify-center">
					<div className="grid md:grid-cols-4 grid-cols-2 gap-3 max-w-7xl">
						{images.length > 0
							? images.map((image, index) => (
									<Image
										key={index}
										className="aspect-square object-cover"
										src={image.variants.thumbnail}
										width={400}
										height={400}
										quality={100}
										alt={image.name}
									/>
							  ))
							: null}
					</div>
				</div>
			</Content>
			<Footer />
		</>
	);
}
