import Image from "next/image";
import Link from "next/link";

import LogoImage from "../../../public/images/logo.svg";

const Logo = () => {
	return (
		<Link href="/home" className="flex items-center gap-2">
			<Image src={LogoImage} alt="Olho no nível" width={60} height={6} className="h-16" />
			<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
				Olho no nível
			</h1>
		</Link>
	);
};

export default Logo;