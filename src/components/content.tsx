type ContentProps = {
	title: string;
	children: JSX.Element;
};

export default function Content({ title, children }: ContentProps) {
	return (
		<main className="flex flex-1 justify-center mt-24 mb-16">
			<div className="p-3">
				<h1 className="pb-5 text-center font-serif text-2xl">
					{title}
				</h1>
				{children}
			</div>
		</main>
	);
}
