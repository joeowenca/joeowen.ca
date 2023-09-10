import { Metadata } from 'next';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: 'Joe Owen | Music',
};

export default function Music() {
	return (
		<>
			<Header page="music" />
			<Content title="Music">
				<pre className="font-sans whitespace-normal max-w-prose">
					This is the music page.
				</pre>
			</Content>
			<Footer />
		</>
	);
}
