export default function Footer() {
	return (
		<div className="flex flex-col items-center w-full pt-5 bg-black">
			<div className="sm:flex max-w-prose">
				<div className="pb-5">
					<h2 className="py-2 px-6 font-serif text-xl">
						Social Links
					</h2>
					<div className="flex">
						<ul className="px-6 w-1/2">
							<FooterLinkItem
								link="https://www.instagram.com/joeowen.ca/"
								redirect={true}
								icon="instagram"
							>
								Instagram
							</FooterLinkItem>
							<FooterLinkItem
								link="https://www.youtube.com/@joeowen_mtb"
								redirect={true}
								icon="youtube"
							>
								YouTube
							</FooterLinkItem>
							<FooterLinkItem
								link="https://soundcloud.com/sas-areku"
								redirect={true}
								icon="soundcloud"
							>
								SoundCloud
							</FooterLinkItem>
							<FooterLinkItem
								link="https://www.tiktok.com/@joeowen.mtb"
								redirect={true}
								icon="tiktok"
							>
								TikTok
							</FooterLinkItem>
						</ul>
						<ul className="px-6 w-1/2">
							<FooterLinkItem
								link="https://www.facebook.com/sasareku/"
								redirect={true}
								icon="facebook"
							>
								Facebook
							</FooterLinkItem>
							<FooterLinkItem
								link="https://github.com/Sas-Areku"
								redirect={true}
								icon="github"
							>
								GitHub
							</FooterLinkItem>
							<FooterLinkItem
								link="https://www.linkedin.com/in/joe-owen-11a138186/"
								redirect={true}
								icon="linkedin"
							>
								Linkedin
							</FooterLinkItem>
						</ul>
					</div>
				</div>
				<div className="pb-5">
					<h2 className="py-2 px-6 font-serif text-xl">Pages</h2>
					<div className="flex">
						<ul className="px-6 w-1/2">
							<FooterLinkItem
								link="/"
								redirect={false}
								icon="home"
							>
								Home
							</FooterLinkItem>
							<FooterLinkItem
								link="/photography"
								redirect={false}
								icon="camera"
							>
								Photography
							</FooterLinkItem>
							<FooterLinkItem
								link="/videos"
								redirect={false}
								icon="video"
							>
								Videos
							</FooterLinkItem>
							<FooterLinkItem
								link="/music"
								redirect={false}
								icon="music"
							>
								Music
							</FooterLinkItem>
						</ul>
						<ul className="px-6 w-1/2">
							<FooterLinkItem
								link="/projects"
								redirect={false}
								icon="laptop"
							>
								Projects
							</FooterLinkItem>
							<FooterLinkItem
								link="/contact"
								redirect={false}
								icon="contact"
							>
								Contact
							</FooterLinkItem>
						</ul>
					</div>
				</div>
			</div>
			<p className="p-4">joeowen.ca</p>
		</div>
	);
}

type FooterLinkItemProps = {
	link: string;
	redirect: boolean;
	icon: string;
	children: string;
};

function FooterLinkItem({
	link,
	redirect,
	icon,
	children,
}: FooterLinkItemProps) {
	return (
		<li className="py-0.5">
			<span className={`icon-${icon} pr-1.5`}></span>
			<a
				href={link}
				target={redirect ? '_blank' : ''}
				className="hover:underline"
			>
				{children}
			</a>
		</li>
	);
}
