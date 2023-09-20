import { StaticImageData } from 'next/image';
import budgeit from '../../../public/budge-it-logo.png';

export type ProjectTypes = {
  title: string;
  image: StaticImageData;
  deployment: string;
  repo: string;
  description: string;
}

export const projects:ProjectTypes[] = [
  {
    title: "Budge-it",
    image: budgeit,
    deployment: "https://sas-areku.github.io/budge-it/",
    repo: "https://github.com/Sas-Areku/budge-it",
    description: "Simple budget app for visualizing your expenses"
  },
];