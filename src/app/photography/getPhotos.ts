export type CategoryTypes = {
  children: (PhotoTypes | CategoryTypes)[];
  name: string;
  type: string;
}

export type PhotoTypes = {
  cloudflareId: string;
  date: string;
  id: string;
  name: string;
  type: string;
  variants: {
    public: string;
    thumbnail: string;
  };
}

export async function getPhotos() {
  return (await fetch("https://photography-5abf9-default-rtdb.firebaseio.com/photography.json")).json();
}