import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import CategoryItem from './CategoryItem';
import { getPhotographyManifest, CategoryTypes } from '../getPhotos';
import categoryImage from '../../../../public/automotive-showcase-long-2.jpg';

export default async function PhotographyContent() {
	const manifest: CategoryTypes = await getPhotographyManifest();

	return (
		<>
			<Header />
			<div>
				{manifest.children.map((category, index) => (
					<CategoryItem
						id={`${category.name}-item`}
						image={categoryImage}
						category={category.name}
						key={index}
					/>
				))}
			</div>
			<Footer />
		</>
	);
}
