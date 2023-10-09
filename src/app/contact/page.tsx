import { Metadata } from 'next';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: 'Joe Owen | Contact',
};

export default function Contact() {
	return (
		<>
			<Header />
			<Content title="Contact">
				<pre className="font-sans whitespace-normal max-w-prose">
					My name is Joe, but you can call me anytime.
				</pre>
			</Content>
			<Footer />
		</>
	);
}
