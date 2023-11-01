import {
	CategoryTypes,
	PhotoTypes,
} from '../../getPhotos';

function isCategoryType(
  item: PhotoTypes | CategoryTypes,
): item is CategoryTypes {
  return item.type === 'Category';
}

export default function getCategories(category: CategoryTypes | null) {
  const categories: CategoryTypes[] = [];
  if (category) {
    category.children.map((item) => {
      if (isCategoryType(item)) {
        categories.push(item);
      }
    });
  }
  return categories;
}