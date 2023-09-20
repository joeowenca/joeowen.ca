import { StaticImageData } from 'next/image';
import joeowen from '../../../public/joe-owen-logo.png';
import budgeit from '../../../public/budge-it-logo.png';
import spacephysics from '../../../public/space-physics-logo.png';
import cloudflare from '../../../public/cloudflare-logo.png';

export type ProjectTypes = {
  title: string;
  image: StaticImageData;
  deployment: string;
  repo: string;
  description: string;
}

export const projects:ProjectTypes[] = [
  {
    title: "joeowen.ca",
    image: joeowen,
    deployment: "https://www.joeowen.ca/",
    repo: "https://github.com/Sas-Areku/joeowen.ca",
    description: "Portfolio and photography website"
  },
  {
    title: "Budge-it",
    image: budgeit,
    deployment: "https://sas-areku.github.io/budge-it/",
    repo: "https://github.com/Sas-Areku/budge-it",
    description: "Simple budget app for visualizing your expenses"
  },
  {
    title: "Space Physics",
    image: spacephysics,
    deployment: "https://sas-areku.github.io/space-physics/",
    repo: "https://github.com/Sas-Areku/space-physics",
    description: "Space physics simulation using HTML Canvas"
  },
  {
    title: "Image Uploader",
    image: cloudflare,
    deployment: "none",
    repo: "https://github.com/Sas-Areku/image-uploader",
    description: "Image uploader to Cloudflare Images CDN"
  },
];