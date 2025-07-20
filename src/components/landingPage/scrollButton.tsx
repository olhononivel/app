"use client";

import Image from "next/image";

interface ScrollButtonProps {
	id: string;
};

export function ScrollButton({ id }: ScrollButtonProps) {
	const scrollTo = () => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="hidden absolute bottom-4 left-0 right-0 lg:flex justify-center">
			<button className="p-2" onClick={scrollTo}>
				<Image src="/icons/arrow-down.svg" width={40} height={40} alt="Arrow down" />
			</button>
		</div>
	);
}
