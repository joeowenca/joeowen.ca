import { CategoryTypes, PhotoTypes } from '../../getPhotos';

export default function findCategory(manifest: CategoryTypes, categoryPath: string) {
	const categoryFlatList = generateFlatList(manifest);
	const foundCategory = categoryFlatList.find(
		(item) => item.path.toLowerCase() === categoryPath,
	);
	if (foundCategory) {
		return foundCategory;
	} else {
		console.error('Category not found.');
		return null;
	}
}

function generateFlatList(manifest: CategoryTypes) {
	const flatList: CategoryTypes[] = [];

	function isCategoryType(
		item: PhotoTypes | CategoryTypes,
	): item is CategoryTypes {
		return item.type === 'Category';
	}

	function recursiveSearch(
		manifest: CategoryTypes,
		flatList: CategoryTypes[],
	) {
		manifest.children.map((item) => {
			if (isCategoryType(item)) {
				flatList.push(item);
				recursiveSearch(item, flatList);
			}
		});
	}

	recursiveSearch(manifest, flatList);

	return flatList;
}
