'use client';

import Introduction from '@/app/components/introduction';
import Showcase from '@/app/components/showcase';
import Header from '@/components/header';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Introduction />
				<Showcase />
			</main>
		</>
	);
}
