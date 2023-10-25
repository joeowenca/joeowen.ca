import {
	getPhotographyManifest,
	CategoryTypes,
	PhotoTypes,
} from '../getPhotos';

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
