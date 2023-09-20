import { Metadata } from 'next';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import Image, { StaticImageData } from 'next/image';
import { projects, ProjectTypes } from './projects';

export const metadata: Metadata = {
	title: 'Joe Owen | Projects',
};

export default function Projects() {
	return (
		<>
			<Header page="projects" />
			<Content title="Projects">
				<div>
					{projects.map((project: ProjectTypes) => (
						<ProjectItem
							title={project.title}
							image={project.image}
							deployment={project.deployment}
							repo={project.repo}
						>
							{project.description}
						</ProjectItem>
					))}
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

function ProjectItem({
	title,
	image,
	deployment,
	repo,
	children,
}: ProjectItemProps) {
	return (
		<section className="flex flex-col lg:flex-row items-center pb-6 max-w-7xl">
			<Image
				className="aspect-square object-cover max-w-xxxxs 3xl:max-w-xxxs lg:mb-0 mb-1 lg:mr-5"
				src={image}
				alt={`${title} project thumbnail`}
			/>
			<div className="max-w-prose grow relative">
				<h2 className="font-serif text-center lg:text-left text-2xl py-3">
					{title}
				</h2>
				<pre className="font-sans whitespace-normal">{children}</pre>
				<div className="flex flex-col items-center lg:flex-row">
					<a href={deployment} target="_blank">
						<button className="icon-play bg-custom-green hover:bg-custom-light-green transition-colors px-4 py-3 lg:mr-5 mb-1.5 mt-3 lg:my-3">
							View deployment
						</button>
					</a>
					<a href={repo} target="_blank">
						<button className="icon-github-spaced bg-custom-blue hover:bg-custom-light-blue transition-colors px-4 py-3 my-1.5 lg:my-3">
							View on Github
						</button>
					</a>
				</div>
			</div>
		</section>
	);
}
