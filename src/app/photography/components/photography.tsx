import Header from '@/components/header';
import Footer from '@/components/footer';
import PhotographyIntroduction from './PhotographyIntroduction';
import CategoryItem from './CategoryItem';
import {
	getPhotographyManifest,
	CategoryTypes,
	PhotoTypes,
} from '../getPhotos';

export default async function PhotographyContent() {
	const manifest: CategoryTypes = await getPhotographyManifest();

	function isCategoryType(
		item: CategoryTypes | PhotoTypes,
	): item is CategoryTypes {
		return 'children' in item;
	}

	return (
		<>
			<Header />
			<PhotographyIntroduction />
			<div className="mt-[100vh]">
				{manifest.children
					.filter(isCategoryType)
					.map((category, index) => {
						const indexPhoto = category.children.find(
							(child): child is PhotoTypes => 'name' in child,
						);

						if (indexPhoto && indexPhoto.name === 'index.jpg') {
							return (
								<CategoryItem
									id={`${category.name}-item`}
									image={indexPhoto.variants.public}
									category={category.name}
									key={index}
								/>
							);
						}

						return null;
					})}
			</div>
			<Footer />
		</>
	);
}
