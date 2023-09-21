'use client';

import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';
import ReactPlayer from 'react-player';
import Image, { StaticImageData } from 'next/image';
import sasareku from '../../../public/sas-areku.png';
import songs from './songs';

export default function MusicContent() {
	type SongTypes = {
		title: string;
		url: string;
		image: StaticImageData;
	};
	return (
		<>
			<Header page="music" />
			<Content title="Music">
				<div className="flex flex-col items-center">
					<Image
						className="invert max-w-[65%] md:max-w-md m-2 pb-8"
						src={sasareku}
						alt="Music page banner"
					/>
					{songs.map((song: SongTypes) => (
						<MusicItem
							key={song.title}
							title={song.title}
							url={song.url}
							image={song.image}
						/>
					))}
				</div>
			</Content>
			<Footer />
		</>
	);
}

type MusicItemProps = {
	title: string;
	url: string;
	image: StaticImageData;
};

function MusicItem({ title, url, image }: MusicItemProps) {
	return (
		<section className="flex items-center md:w-[46rem] lg:w-[62rem] md:h-56 mb-16">
			<Image
				className={'hidden md:block h-56 w-56 mr-5'}
				src={image}
				alt={`${title} cover art`}
			/>
			<div className="aspect-square lg:aspect-auto w-full h-full">
				<ReactPlayer url={url} width="100%" height="100%" />
			</div>
		</section>
	);
}
