import { getPhotographyManifest, CategoryTypes } from '../getPhotos';
import findCategory from './scripts/findCategory';

type CategoryProps = {
	params: {
		category: string[];
	};
};

export default async function Category({ params }: CategoryProps) {
	const categoryPath = '/' + params.category.join('/');
	const manifest: CategoryTypes = await getPhotographyManifest();
	const category = findCategory(manifest, categoryPath);

	return (
		<div>
			{category
				? category.children.length > 0
					? category.children.map((item, index) => (
							<p key={index}>{item.name}</p>
					  ))
					: null
				: null}
		</div>
	);
}
