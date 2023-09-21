import { Metadata } from 'next';
import VideosContent from './videos';

export const metadata: Metadata = {
	title: 'Joe Owen | Videos',
};

export default function Videos() {
	return <VideosContent />;
}
