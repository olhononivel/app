"use client";

import Image from "next/image";

export function ScrollToTop() {
	return (
		<div className="absolute bottom-4 right-6 flex justify-center">
			<button className="p-2 bg-black rounded-md" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
				<Image src="/icons/arrow-top.svg" width={40} height={40} alt="Arrow down" />
			</button>
		</div>
	);
}
