export default async function getPhotos() {
  return (await fetch("https://photography-5abf9-default-rtdb.firebaseio.com/photography.json")).json();
}