import { getPhotographyManifest, CategoryTypes } from '../getPhotos';

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

function findCategory(manifest: CategoryTypes, categoryPath: string) {
	const categoryFlatList = generateFlatList(manifest);
	const foundCategory = categoryFlatList.find(
		(item) => item.path.toLowerCase() === categoryPath,
	);
	if (foundCategory) {
		return foundCategory;
	} else {
		console.error('Category not found.');
	}
}

function generateFlatList(manifest: CategoryTypes) {
	const flatList: CategoryTypes[] = [];

	function recursiveSearch(
		manifest: CategoryTypes,
		flatList: CategoryTypes[],
	) {
		manifest.children.map((item) => {
			if (item.type === 'Category') {
				flatList.push(item);
				recursiveSearch(item, flatList);
			}
		});
	}

	recursiveSearch(manifest, flatList);

	return flatList;
}
