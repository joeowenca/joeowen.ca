import Header from '@/components/header';
import Introduction from '@/app/components/introduction';
import Showcase from '@/app/components/showcase';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<>
			<Header page="home" />
			<main className="flex-1">
				<Introduction />
				<Showcase />
			</main>
			<Footer />
		</>
	);
}
