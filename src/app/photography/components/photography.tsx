import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import CategoryButton from './CategoryButton';
import { getPhotographyManifest, CategoryTypes } from '../getPhotos';

export default async function PhotographyContent() {
	const manifest: CategoryTypes = await getPhotographyManifest();

	return (
		<>
			<Header />
			<Content title="Photography">
				<div>
					{manifest.children.map((category, index) => (
						<CategoryButton key={index} category={category.name} />
					))}
				</div>
			</Content>
			<Footer />
		</>
	);
}
