import Link from 'next/link';

type NavigationProps = {
	color: number;
};

export default function Navigation({ color }: NavigationProps) {
	return (
		<>
			<div
				className="flex items-center w-1/2 ml-auto"
				style={{ color: `rgb(${color}, ${color}, ${color})` }}
			>
				<div className="flex -translate-x-1/2">
					<NavLink page="/">Home</NavLink>
					<NavLink page="photography">Photography</NavLink>
					<NavLink page="videos">Videos</NavLink>
					<NavLink page="music">Music</NavLink>
					<NavLink page="projects">Projects</NavLink>
				</div>
				<div className="ml-auto">Socials links</div>
			</div>
		</>
	);
}

type NavLinkProps = {
	children: string;
	page: string;
};

function NavLink({ children, page }: NavLinkProps) {
	return (
		<div className="p-2 text-lg">
			<Link href={page}>{children}</Link>
		</div>
	);
}
