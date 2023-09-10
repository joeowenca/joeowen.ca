import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Music() {
	return (
		<>
			<Header page="Music" />
			<main className="flex flex-1 justify-center p-3 mt-24">
				<div className="flex-1 max-w-prose">
					<h1 className="text-center font-serif text-2xl">Music</h1>
					<section className="p-2 pb-3">
						<pre className="font-sans whitespace-normal">
							This is the Music page.
						</pre>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
