type ContentProps = {
	title: string;
	children: JSX.Element;
};

export default function Content({ title, children }: ContentProps) {
	return (
		<main className="flex flex-1 justify-center p-3 mt-24">
			<div className="flex-1 max-w-prose">
				<h1 className="text-center font-serif text-2xl">{title}</h1>
				<section className="p-2 pb-3">{children}</section>
			</div>
		</main>
	);
}
