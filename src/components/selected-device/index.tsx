import { DeviceType } from "@/data/user-device";
import { prettierName } from "@/utils/prettierName";
import Image from "next/image";
import waterTank from "../../../public/images/water-tank.svg";

interface SelectDeviceProps {
	device: DeviceType;
	onSelect: (device: DeviceType) => void;
}

export const SelectDevice = ({
	device,
	onSelect,
}: SelectDeviceProps) => {
	const { name, code, city, complement, district, number, street, zipCode, active } = device;

	return (
		<div className="bg-white rounded-xl border border-gray-100 p-4 hover:border-green-200 hover:shadow-md transition-all duration-300 group">
			{/* Status indicator */}
			<div className="flex items-start gap-4">
				{/* Ícone do dispositivo */}
				<div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors flex-shrink-0">
					<Image
						alt="Water Tank"
						src={waterTank}
						className="w-8 h-8"
						width={32}
						height={32}
					/>
				</div>

				{/* Informações do dispositivo */}
				<div className="flex-1 min-w-0">
					<div className="flex items-start justify-between gap-4 mb-3">
						<div className="flex-1 min-w-0">
							<h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors truncate">
								{prettierName(name)}
							</h3>
							<p className="text-sm text-green-600 font-medium">
								{code}
							</p>
						</div>

						{/* Status Badge */}
						<span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${active
							? 'bg-green-100 text-green-700'
							: 'bg-gray-100 text-gray-600'
							}`}>
							<div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500' : 'bg-gray-400'}`} />
							{active ? 'Ativo' : 'Inativo'}
						</span>
					</div>

					{/* Endereço */}
					<div className="flex items-start gap-2 mb-4">
						<svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<div className="text-sm text-gray-600 leading-relaxed">
							<div>{street}, {number}</div>
							<div className="text-gray-500">
								{district}
								{complement && `, ${complement}`}
							</div>
							<div className="text-gray-500">
								{city}
								{zipCode && ` - ${zipCode}`}
							</div>
						</div>
					</div>

					{/* Botão de ação */}
					<button
						onClick={() => onSelect(device)}
						className="w-full sm:w-auto bg-green-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-2"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
						</svg>
						Adicionar Monitoramento
					</button>
				</div>
			</div>
		</div>
	);
};