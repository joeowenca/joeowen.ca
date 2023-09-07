import Header from '@/components/header';

export default function Photography() {
	return (
		<>
			<Header page="photography" />
			<main className="flex justify-center p-3 mt-24">
				<div className="flex-1 max-w-prose">
					<h1 className="text-center font-serif text-2xl">
						Photography
					</h1>
					<section className="p-2 pb-3">
						<pre className="font-sans whitespace-normal">
							This is the Photography page.
						</pre>
					</section>
				</div>
			</main>
		</>
	);
}
