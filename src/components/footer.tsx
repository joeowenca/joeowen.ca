export default function Footer() {
	return (
		<div className="flex justify-center items-center w-full max-h-56 py-5 bg-black">
			<div className="flex max-w-7xl">
				<div>
					<h2 className="p-2">Links</h2>
					<div className="lg:flex">
						<ul className="px-2">
							<FooterLinkItem link="#">Instagram</FooterLinkItem>
							<FooterLinkItem link="#">YouTube</FooterLinkItem>
							<FooterLinkItem link="#">SoundCloud</FooterLinkItem>
							<FooterLinkItem link="#">TikTok</FooterLinkItem>
						</ul>
						<ul className="px-2">
							<FooterLinkItem link="#">Facebook</FooterLinkItem>
							<FooterLinkItem link="#">GitHub</FooterLinkItem>
							<FooterLinkItem link="#">Linkedin</FooterLinkItem>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

type FooterLinkItemProps = {
	link: string;
	children: string;
};

function FooterLinkItem({ link, children }: FooterLinkItemProps) {
	return (
		<li className="py-0.5">
			<span
				className={`icon-${children.toLocaleLowerCase()} pr-1.5`}
			></span>
			<a href={link} target="_blank" className="hover:underline">
				{children}
			</a>
		</li>
	);
}
