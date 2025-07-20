"use client";

import { CardDevice } from "@/components/card-device";
import { useSession } from "@/contexts/sessionContext";
import { DeviceType } from "@/data/user-device";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { toast } from "react-toastify";
import { listDevicesByUser } from "../../../../actions/list-device-monitoring";

// Componente de Loading Moderno
const ModernLoading = () => (
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{[...Array(6)].map((_, i) => (
			<div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
				<div className="flex items-start gap-4 mb-4">
					<div className="w-14 h-14 bg-gray-200 rounded-xl"></div>
					<div className="flex-1">
						<div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
						<div className="h-4 bg-gray-200 rounded w-1/2"></div>
					</div>
					<div className="w-3 h-3 bg-gray-200 rounded-full"></div>
				</div>
				<div className="h-6 bg-gray-200 rounded-full w-20 mb-4"></div>
				<div className="space-y-2">
					<div className="h-4 bg-gray-200 rounded w-full"></div>
					<div className="h-4 bg-gray-200 rounded w-2/3"></div>
				</div>
			</div>
		))}
	</div>
);

// Componente de Estado Vazio Moderno
const EmptyState = () => (
	<div className="text-center py-12">
		<div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
			<svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
			</svg>
		</div>
		<h3 className="text-xl font-bold text-gray-900 mb-3">Nenhum Dispositivo Monitorado</h3>
		<p className="text-gray-500 mb-8 max-w-sm mx-auto">
			Você ainda não possui dispositivos sendo monitorados. Adicione seu primeiro dispositivo para começar.
		</p>
		<Link
			href="/new-device"
			className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
		>
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
			</svg>
			Adicionar Primeiro Dispositivo
		</Link>
	</div>
);

// Header responsivo com estatísticas em telas maiores
const ResponsiveHeader = ({ devices }: { devices: DeviceType[] }) => {
	const devicesCount = devices.length;
	const activeDevices = devices.filter(device => device.active).length;
	const inactiveDevices = devicesCount - activeDevices;

	return (
		<div className="mb-8">
			{/* Header Principal */}
			<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
				<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
					<div className="flex items-center gap-4">
						{/* Ícone Principal */}
						<div className="p-3 bg-blue-50 rounded-xl">
							<svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C12 2 4 10 4 16C4 20 7 22 12 22C17 22 20 20 20 16C20 10 12 2 12 2Z" />
							</svg>
						</div>

						<div>
							<h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
								Dispositivos Monitorados
							</h1>
							<p className="text-gray-500 text-sm lg:text-base">
								{devicesCount > 0
									? `Gerencie e monitore seus ${devicesCount} dispositivo${devicesCount > 1 ? 's' : ''} IoT`
									: 'Nenhum dispositivo encontrado'
								}
							</p>
						</div>
					</div>

					{/* Estatísticas em Cards - Telas Maiores */}
					{devicesCount > 0 && (
						<div className="hidden lg:flex items-center gap-4">
							<div className="bg-blue-50 rounded-xl p-4 text-center min-w-[80px]">
								<div className="text-2xl font-bold text-blue-600">{devicesCount}</div>
								<div className="text-xs text-blue-500 font-medium">Total</div>
							</div>
							<div className="bg-green-50 rounded-xl p-4 text-center min-w-[80px]">
								<div className="text-2xl font-bold text-green-600">{activeDevices}</div>
								<div className="text-xs text-green-500 font-medium">Ativos</div>
							</div>
							{inactiveDevices > 0 && (
								<div className="bg-orange-50 rounded-xl p-4 text-center min-w-[80px]">
									<div className="text-2xl font-bold text-orange-600">{inactiveDevices}</div>
									<div className="text-xs text-orange-500 font-medium">Inativos</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>

			{/* Estatísticas em Mobile - Cards Horizontais */}
			{devicesCount > 0 && (
				<div className="lg:hidden grid grid-cols-2 gap-4 mb-6">
					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
						<div className="flex items-center justify-center gap-2 mb-2">
							<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
							<span className="text-sm font-medium text-gray-600">Total</span>
						</div>
						<div className="text-xl font-bold text-gray-900">{devicesCount}</div>
					</div>

					<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
						<div className="flex items-center justify-center gap-2 mb-2">
							<div className="w-3 h-3 bg-green-500 rounded-full"></div>
							<span className="text-sm font-medium text-gray-600">Ativos</span>
						</div>
						<div className="text-xl font-bold text-gray-900">{activeDevices}</div>
					</div>

					{inactiveDevices > 0 && (
						<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center col-span-2">
							<div className="flex items-center justify-center gap-2 mb-2">
								<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
								<span className="text-sm font-medium text-gray-600">Dispositivos Inativos</span>
							</div>
							<div className="text-xl font-bold text-gray-900">{inactiveDevices}</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default function Home() {
	const [isPending, startTransition] = useTransition();
	const { user: { id } } = useSession();
	const [devices, setDevices] = useState<DeviceType[]>([]);

	useEffect(() => {
		startTransition(() => {
			listDevicesByUser({ userId: id })
				.then((response) => {
					if (response.error) {
						toast.error(response.error);
						return;
					}

					if (response.devices) {
						setDevices(response.devices);
					}
				})
				.catch(() => {
					toast.error("Erro ao buscar seus dispositivos!");
				});
		});
	}, [id]);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto p-4">
				{/* Header Responsivo */}
				<ResponsiveHeader devices={devices} />

				{/* Conteúdo Principal */}
				{isPending ? (
					<ModernLoading />
				) : devices.length > 0 ? (
					<>
						{/* Grid Responsivo de Dispositivos */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
							{devices.map((device) => (
								<div key={device.id} className="transform hover:scale-[1.02] transition-transform duration-200">
									<CardDevice device={device} />
								</div>
							))}
						</div>

						{/* Botão para Adicionar Mais Dispositivos */}
						<div className="text-center">
							<Link
								href="/new-device"
								className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
								</svg>
								Adicionar Mais Dispositivos
							</Link>
						</div>
					</>
				) : (
					<EmptyState />
				)}
			</div>
		</div>
	);
};
