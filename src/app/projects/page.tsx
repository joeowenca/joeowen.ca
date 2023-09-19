import { Metadata } from 'next';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import Image, { StaticImageData } from 'next/image';
import budgeit from '../../../public/budge-it-logo.png';

export const metadata: Metadata = {
	title: 'Joe Owen | Projects',
};

export default function Projects() {
	return (
		<>
			<Header page="projects" />
			<Content title="Projects">
				<div>
					<ProjectItem title="Budge-it" image={budgeit} deployment="https://sas-areku.github.io/budge-it/" repo="https://github.com/Sas-Areku/budge-it">Simple budget app for visualizing your expenses</ProjectItem>
				</div>
			</Content>
			<Footer />
		</>
	);
}

type ProjectItemProps = {
	title: string;
	image: StaticImageData;
	deployment: string;
	repo: string;
	children: string;
};

function ProjectItem({ title, image, deployment, repo, children }: ProjectItemProps) {
	return (
		<section className="flex flex-col lg:flex-row items-center pb-6 max-w-7xl">
			<Image
				className="aspect-square object-cover max-w-[80%] xs:max-w-sm lg:max-w-xs 3xl:max-w-sm lg:mb-0 mb-1 lg:mr-5"
				src={image}
				alt={`${title} project thumbnail`}
			/>
			<div className="max-w-prose grow relative">
				<h2 className="font-serif text-xl py-3">{title}</h2>
				<pre className="font-sans whitespace-normal">{children}</pre>
				<a href={deployment} target="_blank">
					<button
						className="icon-play bg-custom-green hover:bg-custom-light-green transition-colors px-4 py-3 mr-5 my-3"
					>
						View deployment
					</button>
				</a>
				<a href={repo} target="_blank">
					<button
						className="icon-github bg-custom-blue hover:bg-custom-light-blue transition-colors px-4 py-3 my-3"
					>
						View on Github
					</button>
				</a>
			</div>
		</section>
	);
}
