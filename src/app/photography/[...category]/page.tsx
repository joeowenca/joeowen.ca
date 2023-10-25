import Image from 'next/image';
import {
	getPhotographyManifest,
	CategoryTypes,
	PhotoTypes,
} from '../getPhotos';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import findCategory from './scripts/findCategory';
import getCategoryImages from './scripts/getCategoryImages';

type CategoryProps = {
	params: {
		category: string[];
	};
};

export default async function Category({ params }: CategoryProps) {
	const categoryPath = '/' + params.category.join('/');
	const manifest: CategoryTypes = await getPhotographyManifest();
	const category = findCategory(manifest, categoryPath);
	const images = getCategoryImages(category);

	return (
		<>
			<Header />
			<Content title={category ? category.name : 'Photography'}>
				<div className="flex w-full justify-center">
					<div className="grid grid-cols-6 gap-5 p-5 max-w-7xl">
						{images.length > 0
							? images.map((item, index) => (
									<Image
										key={index}
										className="aspect-square object-cover"
										src={item.variants.thumbnail}
										width={250}
										height={250}
										alt={item.name}
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
