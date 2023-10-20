import { Metadata } from 'next';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: 'Joe Owen | Photography',
};

export default function Photography() {
	return (
		<>
			<Header />
			<Content title="Photography">
				<pre className="font-sans whitespace-normal max-w-prose mb-[100vh]">
					Coming soon.
				</pre>
			</Content>
			<Footer />
		</>
	);
}
