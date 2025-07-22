import Image from "next/image";
import Link from "next/link";

import LogoImageFooter from "../../../public/images/water-tank.svg";
import LogoImage from "../../../public/web-app-manifest-512x512.png";

interface LogoProps {
	isFooter?: boolean;
};

const Logo = ({ isFooter = false }: LogoProps) => {
	return (
		<Link href="/home" className="flex items-center gap-2">
			<Image src={isFooter ? LogoImageFooter : LogoImage} alt="Olho no nível" width={60} height={6} className="h-16" />
			<h1 className={`text-transparent bg-clip-text bg-gradient-to-r ${isFooter ? "from-blue-500" : "from-gray-900"} via-blue-800 to-purple-900 font-bold text-xl`}>
				Olho no nível
			</h1>
		</Link >
	);
};

export default Logo;