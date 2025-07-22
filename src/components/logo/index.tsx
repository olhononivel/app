import Image from "next/image";
import Link from "next/link";

import LogoImage from "../../../public/web-app-manifest-512x512.png";

const Logo = () => {
	return (
		<Link href="/home" className="flex items-center gap-2">
			<Image src={LogoImage} alt="Olho no nível" width={60} height={6} className="h-16" />
			<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 font-bold text-xl">
				Olho no nível
			</h1>
		</Link>
	);
};

export default Logo;