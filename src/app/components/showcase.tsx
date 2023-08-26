import { useEffect, useState } from 'react';
import calculateScrollAlpha from '@/scripts/calculateScrollAlpha';

export default function Showcase() {
	const [alpha, setAlpha] = useState('0.00');

	function handleScroll() {
		setAlpha(calculateScrollAlpha);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className="flex justify-center p-3 pt-[100vh]"
			style={{ backgroundColor: `rgba(0, 0, 0, ${alpha})` }}
		>
			<div className="flex-1 max-w-prose">
				<h1 className="p-3 text-center font-serif text-2xl">
					{'Photography'}
				</h1>
				<ShowcaseItem title="Sports">
					This will become a description for sports photography
				</ShowcaseItem>
				<ShowcaseItem title="Automotive">
					This will become a description for automotive photography
				</ShowcaseItem>
				<ShowcaseItem title="Landscapes">
					This will become a description for landscape photography
				</ShowcaseItem>

				<h1 className="p-3 text-center font-serif text-2xl">
					{'Videos'}
				</h1>
				<ShowcaseItem title="Mountain biking">
					This will become a description for mountain bike videos
				</ShowcaseItem>
				<ShowcaseItem title="Automotive">
					This will become a description for automotive videos
				</ShowcaseItem>
				<ShowcaseItem title="Skiing">
					This will become a description for skiing videos
				</ShowcaseItem>
			</div>
		</div>
	);
}

type ShowcaseItemProps = {
	title: string;
	children: string;
};

function ShowcaseItem({ title, children }: ShowcaseItemProps) {
	return (
		<section className="pb-3">
			<h2 className="font-serif text-xl">{title}</h2>
			<pre className="font-sans whitespace-normal">{children}</pre>
		</section>
	);
}
