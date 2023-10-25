'use client';

import { useRouter } from 'next/navigation';

type CategoryButtonProps = {
	category: string;
};

export default function CategoryButton({ category }: CategoryButtonProps) {
	const router = useRouter();

	function handleClick() {
		router.push(`/photography/${category.toLowerCase()}`);
	}

	return (
		<div onClick={handleClick} className="cursor-pointer">
			{category}
		</div>
	);
}
