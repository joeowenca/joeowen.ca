import {
	CategoryTypes,
	PhotoTypes,
} from '../../getPhotos';

function isPhotoType(item: PhotoTypes | CategoryTypes): item is PhotoTypes {
  return item.type === 'Image';
}

export default function getCategoryImages(category: CategoryTypes | null) {
  const images: PhotoTypes[] = [];
  if (category) {
    category.children.map((item) => {
      if (isPhotoType(item)) {
        images.push(item);
      }
    });
  } else {
    return images;
  }
  return images;
}