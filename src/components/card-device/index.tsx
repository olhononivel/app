import Image from "next/image";

import { DeviceType } from "@/data/user-device";
import { prettierName } from "@/utils/prettierName";

import { useDeviceStore } from '@/store/deviceStore';
import Link from "next/link";
import waterTank from "../../../public/images/water-tank.svg";

interface DeviceProps {
	device: DeviceType;
}

export const CardDevice = ({ device }: DeviceProps) => {
	const { name, code, city, complement, district, number, street, zipCode, active } = device;

	const handleDeviceClick = () => {
		useDeviceStore.getState().setSelectedDevice(device);
	};

	return (
		<Link
			href={`/device/${code}`}
			onClick={handleDeviceClick}
			className="group relative block bg-white rounded-2xl border border-gray-100 p-4 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 h-full"
		>
			{/* Status Indicator */}
			<div className="absolute top-4 right-4">
				<div className={`w-3 h-3 rounded-full ${active ? 'bg-green-500' : 'bg-gray-300'}`} />
			</div>

			{/* Header com ícone */}
			<div className="flex items-start gap-3 mb-4">
				<div className="p-2 lg:p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors flex-shrink-0">
					<Image
						alt="Water Tank"
						src={waterTank}
						className="w-6 h-6 lg:w-8 lg:h-8"
						width={32}
						height={32}
					/>
				</div>
				<div className="flex-1 min-w-0">
					<h3 className="text-base lg:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
						{prettierName(name)}
					</h3>
					<p className="text-xs lg:text-sm text-gray-500 font-medium">
						{code}
					</p>
				</div>
			</div>

			{/* Status Badge */}
			<div className="mb-4">
				<span className={`inline-flex items-center gap-1 px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${active
					? 'bg-green-100 text-green-700'
					: 'bg-gray-100 text-gray-600'
					}`}>
					<div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500' : 'bg-gray-400'}`} />
					{active ? 'Ativo' : 'Inativo'}
				</span>
			</div>

			{/* Endereço - Otimizado para grid */}
			<div className="space-y-1">
				<div className="flex items-start gap-2">
					<svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<div className="text-xs lg:text-sm text-gray-600 leading-relaxed min-w-0 flex-1">
						<div className="font-medium truncate">{street}, {number}</div>
						<div className="text-gray-500 truncate">
							{district}
							{complement && `, ${complement}`}
						</div>
						<div className="text-gray-500 truncate">
							{city}
							{zipCode && ` - ${zipCode}`}
						</div>
					</div>
				</div>
			</div>

			{/* Hover Effect */}
			<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</Link>
	);
};
