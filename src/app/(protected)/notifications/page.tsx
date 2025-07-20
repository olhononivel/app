"use client";

import { DeviceDataCard } from "@/components/notifications/DeviceDataCard";
import { Icon } from "@/components/ui/Icon";
import { useUserDeviceData } from "@/hooks/useUserDeviceData";

export default function Notifications() {
	const { data, loading, error, totalDevices, refetch } = useUserDeviceData(30);

	const handleRefresh = () => {
		refetch();
	};

	return (
		<div className="max-w-6xl mx-auto px-4 py-8">
			{/* Header */}
			<div className="mb-8">
				<div className="flex items-center justify-between mb-4">
					<div>
						<h1 className="text-3xl font-bold text-gray-900">
							Histórico de Monitoramento
						</h1>
						<p className="text-gray-600 mt-2">
							Acompanhe os últimos dados dos seus dispositivos monitorados
						</p>
					</div>

					<button
						onClick={handleRefresh}
						disabled={loading}
						className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						<Icon name="refresh" className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} size={16} />
						<span>Atualizar</span>
					</button>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<div className="flex items-center space-x-3">
							<Icon name="activity" className="w-8 h-8 text-blue-600" size={32} />
							<div>
								<p className="text-sm text-gray-500">Dispositivos Monitorados</p>
								<p className="text-2xl font-bold text-gray-900">{totalDevices}</p>
							</div>
						</div>
					</div>

					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<div className="flex items-center space-x-3">
							<Icon name="alert-triangle" className="w-8 h-8 text-orange-600" size={32} />
							<div>
								<p className="text-sm text-gray-500">Registros Recentes</p>
								<p className="text-2xl font-bold text-gray-900">{data.length}</p>
							</div>
						</div>
					</div>

					<div className="bg-white p-4 rounded-lg border border-gray-200">
						<div className="flex items-center space-x-3">
							<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
								<div className="w-3 h-3 bg-green-500 rounded-full"></div>
							</div>
							<div>
								<p className="text-sm text-gray-500">Status do Sistema</p>
								<p className="text-lg font-bold text-green-600">Online</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Conteúdo principal */}
			{loading && (
				<div className="flex items-center justify-center py-12">
					<div className="text-center">
						<Icon name="refresh" className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" size={32} />
						<p className="text-gray-600">Carregando dados dos dispositivos...</p>
					</div>
				</div>
			)}

			{error && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
					<div className="flex items-center space-x-3">
						<Icon name="alert-triangle" className="w-6 h-6 text-red-600" size={24} />
						<div>
							<h3 className="text-lg font-medium text-red-800">Erro ao carregar dados</h3>
							<p className="text-red-600 mt-1">{error}</p>
						</div>
					</div>
					<button
						onClick={handleRefresh}
						className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
					>
						Tentar novamente
					</button>
				</div>
			)}

			{!loading && !error && data.length === 0 && (
				<div className="text-center py-12">
					<Icon name="activity" className="w-16 h-16 text-gray-400 mx-auto mb-4" size={64} />
					<h3 className="text-xl font-medium text-gray-900 mb-2">
						Nenhum dado encontrado
					</h3>
					<p className="text-gray-600 mb-6">
						Você ainda não possui dispositivos monitorados ou não há dados recentes disponíveis.
					</p>
					<button
						onClick={handleRefresh}
						className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					>
						Verificar novamente
					</button>
				</div>
			)}

			{!loading && !error && data.length > 0 && (
				<div className="space-y-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-4">
						Últimos Registros ({data.length})
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{data.map((deviceData) => (
							<DeviceDataCard
								key={`${deviceData.device.id}-${deviceData.id}`}
								deviceData={deviceData}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
