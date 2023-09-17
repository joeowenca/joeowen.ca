import { StaticImageData } from 'next/image';
import refraction from '../../../public/cover-art/refraction-album-art.jpg';

type SongTypes = {
  title: string;
  url: string;
  image: StaticImageData;
}

const songs:SongTypes[] = [{
  title: "Refraction",
  url: "https://soundcloud.com/sas-areku/refraction-sas-areku",
  image: refraction,
}];

export default songs;