import Header from '@/components/header';
import Footer from '@/components/footer';
import PhotographyIntroduction from './PhotographyIntroduction';
import CategoryItem from './CategoryItem';
import { getPhotographyManifest, CategoryTypes } from '../getPhotos';
import categoryImage from '../../../../public/automotive-showcase-long-2.jpg';

export default async function PhotographyContent() {
	const manifest: CategoryTypes = await getPhotographyManifest();

	return (
		<>
			<Header />
			<PhotographyIntroduction />
			<div className="mt-[100vh]">
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
