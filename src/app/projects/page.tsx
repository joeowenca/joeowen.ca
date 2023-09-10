import { Metadata } from 'next';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: 'Joe Owen | Projects',
};

export default function Projects() {
	return (
		<>
			<Header page="projects" />
			<Content title="Projects">
				<pre className="font-sans whitespace-normal max-w-prose">
					This is the projects page.
				</pre>
			</Content>
			<Footer />
		</>
	);
}
