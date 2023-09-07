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
				<div className="-translate-x-1/2">Navigation items here</div>
				<div className="ml-auto">Socials links</div>
			</div>
		</>
	);
}
