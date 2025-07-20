"use client";

import { SelectDevice } from "@/components/selected-device";
import { useSession } from "@/contexts/sessionContext";
import { DeviceType } from "@/data/user-device";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";
import { searchDevice } from "../../../../actions/searchDevice";
import { addSubscribeMonitoring } from "../../../../actions/subscribe-monitoring";

// Header moderno para adicionar dispositivo
const AddDeviceHeader = () => (
	<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
		<div className="flex flex-col items-center text-center">
			{/* Ícone de Adicionar Dispositivo */}
			<div className="p-4 bg-green-50 rounded-full mb-4">
				<svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
				</svg>
			</div>

			<h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
				Adicionar Dispositivo
			</h1>
			<p className="text-gray-500 text-sm lg:text-base max-w-md">
				Busque pelo dispositivo que deseja
				<span className="text-green-600 font-semibold"> monitorar</span>
			</p>
		</div>
	</div>
);

// Campo de busca moderno
const ModernSearchField = ({ inputRef, onSearch, isLoading }: {
	inputRef: React.RefObject<HTMLInputElement>;
	onSearch: () => void;
	isLoading: boolean;
}) => {
	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			onSearch();
		}
	};

	return (
		<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
			<div className="text-center mb-4">
				<h2 className="text-lg font-semibold text-gray-900 mb-2">
					Buscar Dispositivo
				</h2>
				<p className="text-gray-500 text-sm">
					Use o código ou nome do dispositivo para encontrá-lo
				</p>
			</div>

			<div className="space-y-4">
				{/* Campo de busca */}
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<input
						ref={inputRef}
						type="text"
						placeholder="Digite o código ou nome do dispositivo"
						onKeyPress={handleKeyPress}
						className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-500 text-sm lg:text-base transition-colors"
					/>
				</div>

				{/* Botão de busca */}
				<button
					onClick={onSearch}
					disabled={isLoading}
					className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
				>
					{isLoading ? (
						<>
							<svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
							</svg>
							Buscando...
						</>
					) : (
						<>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
							Buscar Dispositivo
						</>
					)}
				</button>
			</div>
		</div>
	);
};

// Estado vazio moderno
const EmptySearchState = () => (
	<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
		<div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
			<svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</div>
		<h3 className="text-lg font-semibold text-gray-900 mb-2">
			Faça sua primeira busca
		</h3>
		<p className="text-gray-500 text-sm max-w-sm mx-auto">
			Digite o código ou nome do dispositivo que você deseja monitorar e clique em buscar
		</p>
	</div>
);

// Estado sem resultados
const NoResultsState = () => (
	<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
		<div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
			<svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.96-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
			</svg>
		</div>
		<h3 className="text-lg font-semibold text-gray-900 mb-2">
			Nenhum Dispositivo Encontrado
		</h3>
		<p className="text-gray-500 text-sm max-w-sm mx-auto mb-4">
			Não encontramos dispositivos com os termos da sua busca. Verifique o código ou nome e tente novamente.
		</p>
		<div className="text-xs text-gray-400">
			Dica: Use o código exato do dispositivo para melhores resultados
		</div>
	</div>
);

// Loading moderno para busca
const SearchLoadingState = () => (
	<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
		<div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
			<svg className="w-10 h-10 text-green-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</div>
		<h3 className="text-lg font-semibold text-gray-900 mb-2">
			Buscando Dispositivos...
		</h3>
		<p className="text-gray-500 text-sm">
			Aguarde enquanto procuramos pelos dispositivos
		</p>
		<div className="mt-4 flex justify-center">
			<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
		</div>
	</div>
);

export default function NewDevice() {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);
	const [isPending, startTransition] = useTransition();
	const [devices, setDevices] = useState<DeviceType[]>([]);
	const [hasSearched, setHasSearched] = useState(false);
	const { user: { id } } = useSession();

	const handleGetDevice = () => {
		const value = inputRef.current?.value;

		if (!value) {
			toast.error("Informe um valor para buscar!");
			return;
		}

		setHasSearched(true);
		setDevices([]); // Limpa resultados anteriores

		startTransition(() => {
			searchDevice({ searchTerm: value })
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
	};

	const handleSubscribe = (device: DeviceType) => {
		startTransition(() => {
			addSubscribeMonitoring({ idDevice: device.id, idUser: id })
				.then((response) => {
					if (response.error) {
						toast.error(response.error);
						return;
					}

					toast.success("Dispositivo adicionado com sucesso!");
					router.replace("/home");
				})
				.catch(() => {
					toast.error("Erro ao adicionar o dispositivo!");
				});
		});
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-4xl mx-auto p-4">
				{/* Header Principal */}
				<AddDeviceHeader />

				{/* Campo de Busca */}
				<ModernSearchField
					inputRef={inputRef as React.RefObject<HTMLInputElement>}
					onSearch={handleGetDevice}
					isLoading={isPending}
				/>

				{/* Resultados */}
				{isPending ? (
					<SearchLoadingState />
				) : !hasSearched ? (
					<EmptySearchState />
				) : devices.length > 0 ? (
					<div className="space-y-4">
						<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
							<div className="p-4 border-b border-gray-100">
								<h3 className="text-lg font-semibold text-gray-900">
									Dispositivos Encontrados
								</h3>
								<p className="text-sm text-gray-500">
									{devices.length} dispositivo{devices.length > 1 ? 's' : ''} encontrado{devices.length > 1 ? 's' : ''}
								</p>
							</div>
							<div className="p-4 space-y-4">
								{devices.map((device) => (
									<SelectDevice key={device.id} device={device} onSelect={handleSubscribe} />
								))}
							</div>
						</div>
					</div>
				) : (
					<NoResultsState />
				)}
			</div>
		</div>
	);
};
