import { Metadata } from 'next';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: 'Joe Owen | Videos',
};

export default function Videos() {
	return (
		<>
			<Header page="videos" />
			<Content title="Videos">
				<pre className="font-sans whitespace-normal max-w-prose">
					This is the videos page.
				</pre>
			</Content>
			<Footer />
		</>
	);
}
