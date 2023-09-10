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
			<Header page="photography" />
			<Content title="Photography">
				<pre className="font-sans whitespace-normal max-w-prose">
					This is the photography page.
				</pre>
			</Content>
			<Footer />
		</>
	);
}
