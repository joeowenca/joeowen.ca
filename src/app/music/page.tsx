import { Metadata } from 'next';
import MusicContent from './music';

export const metadata: Metadata = {
	title: 'Joe Owen | Music',
};

export default function Music() {
	return <MusicContent />;
}
