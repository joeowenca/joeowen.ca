'use client';

import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import ReactPlayer from 'react-player';
import Image, { StaticImageData } from 'next/image';
import refraction from '../../../public/cover-art/refraction-album-art.jpg';

export default function Music() {
	return (
		<>
			<Header page="music" />
			<Content title="Music">
				<div className="flex flex-col">
					<MusicItem
						song="https://soundcloud.com/sas-areku/refraction-sas-areku"
						image={refraction}
					></MusicItem>
				</div>
			</Content>
			<Footer />
		</>
	);
}

type MusicItemProps = {
	song: string;
	image: StaticImageData;
};

function MusicItem({ song, image }: MusicItemProps) {
	return (
		<section className="flex items-center md:w-[46rem] lg:w-[62rem] md:h-56 mb-5">
			<Image
				className={'hidden md:block h-56 w-56 mr-5'}
				src={image}
				alt={'song cover art'}
			/>
			<div className="aspect-square lg:aspect-auto w-full h-full">
				<ReactPlayer url={song} width="100%" height="100%" />
			</div>
		</section>
	);
}
