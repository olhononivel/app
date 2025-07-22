"use client"

import Image from "next/image";
import { useMemo } from "react";

import "./styles.css";

import { Device } from "@prisma/client";
import { CurrentDeviceDataType } from "../../../actions/data-device";
import gearGif from "../../../public/images/gear.gif";
import pump from "../../../public/images/pump-water.png";

interface WaterLevelIndicatorProps {
	device: Device;
	dataDevice: CurrentDeviceDataType;
	onRefresh?: () => Promise<void>;
	isRefreshing?: boolean;
}

// Componente de Card Moderno para Dados
const DataCard = ({
	icon,
	title,
	value,
	unit,
	subtitle,
	color = "blue"
}: {
	icon: React.ReactNode;
	title: string;
	value: string | number;
	unit?: string;
	subtitle?: string;
	color?: "blue" | "green" | "purple" | "orange";
}) => {
	const colorClasses = {
		blue: "bg-blue-50 border-blue-200 text-blue-600",
		green: "bg-green-50 border-green-200 text-green-600",
		purple: "bg-purple-50 border-purple-200 text-purple-600",
		orange: "bg-orange-50 border-orange-200 text-orange-600"
	};

	return (
		<div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
			<div className="flex items-center gap-3 mb-3">
				<div className={`p-2 rounded-xl ${colorClasses[color]}`}>
					{icon}
				</div>
				<div className="flex-1">
					<h3 className="text-sm font-medium text-gray-600">{title}</h3>
					{subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
				</div>
			</div>
			<div className="flex items-baseline gap-1">
				<span className="text-2xl font-bold text-gray-900">{value}</span>
				{unit && <span className="text-sm text-gray-500">{unit}</span>}
			</div>
		</div>
	);
};

interface PumpStatusCardProps {
	pumpNumber: number;
	isActive: boolean;
	showAnimation?: boolean;
}

// Componente de Status das Bombas Moderno
const PumpStatusCard = ({
	pumpNumber,
	isActive,
	showAnimation = true
}: PumpStatusCardProps) => (
	<div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
		<div className="flex items-center justify-between mb-3">
			<h3 className="text-sm font-semibold text-gray-700">Bomba {pumpNumber}</h3>
			<div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-300'}`} />
		</div>

		<div className="flex items-center justify-center mb-3">
			<div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40">
				{isActive && showAnimation && (
					<Image
						src={gearGif}
						alt="gear-animation"
						width={500}
						height={500}
						className="absolute inset-0 w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
					/>
				)}
				<Image
					src={pump}
					alt="pump-water"
					width={500}
					height={500}
					className="relative z-10 mt-6 md:mt-8 lg:mt-10 mx-auto w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
				/>
			</div>
		</div>

		<div className="text-center">
			<span className={`text-xs font-medium py-3 h-4 w-16 flex items-center justify-center rounded-full ${isActive
				? 'bg-green-100 text-green-700'
				: 'bg-gray-100 text-gray-600'
				}`}>
				{isActive ? 'Ativa' : 'Inativa'}
			</span>
		</div>
	</div>
);

interface ModernWaterLevelIndicatorProps {
	percentage: number;
	currentVolume: number;
	totalCapacity: number;
	code: string;
	name: string;
	formattedDate: string;
	onRefresh?: () => Promise<void>;
	isRefreshing?: boolean;
}

// Componente do Indicador de Nível Moderno
const ModernWaterLevelIndicator = ({
	percentage,
	currentVolume,
	totalCapacity,
	code,
	name,
	formattedDate,
	onRefresh,
	isRefreshing = false
}: ModernWaterLevelIndicatorProps) => {
	const defineColor = (percentage: number) => {
		if (percentage <= 25) return "bg-red-400";
		if (percentage <= 50) return "bg-orange-400";
		if (percentage <= 75) return "bg-blue-400";
		return "bg-green-400";
	}

	return (
		<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
			{/* Header do Card */}
			<div className="flex items-center justify-between mb-6">
				<div>
					<h2 className="text-lg font-bold text-gray-900">{name}</h2>
					<p className="text-sm text-gray-500">{code}</p>
				</div>
				<div className="flex items-center gap-4">
					{/* Botão de Atualizar */}
					{onRefresh && (
						<button
							onClick={onRefresh}
							disabled={isRefreshing}
							className="group p-2 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
							title="Atualizar dados"
						>
							{isRefreshing ? (
								<div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
							) : (
								<svg className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							)}
						</button>
					)}
					<div className="text-right">
						<div className="text-2xl font-bold text-blue-600">{percentage}%</div>
						<div className="text-xs text-gray-500">do total</div>
					</div>
				</div>
			</div>

			{/* Indicador Visual Circular */}
			<div className="flex items-center justify-center mb-6">
				<div className="relative w-32 h-32">
					{/* Círculo de fundo */}
					<svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
						<circle
							cx="60"
							cy="60"
							r="50"
							stroke="#e5e7eb"
							strokeWidth="8"
							fill="none"
						/>
						{/* Círculo de progresso */}
						<circle
							cx="60"
							cy="60"
							r="50"
							stroke="#3b82f6"
							strokeWidth="8"
							fill="none"
							strokeLinecap="round"
							strokeDasharray={`${2 * Math.PI * 50}`}
							strokeDashoffset={`${2 * Math.PI * 50 * (1 - percentage / 100)}`}
							className={`transition-all duration-1000 ease-out ${isRefreshing ? 'animate-pulse' : ''}`}
						/>
					</svg>

					{/* Ícone central */}
					<div className="absolute inset-0 flex items-center justify-center">
						{isRefreshing ? (
							<div className="text-blue-500 animate-spin">
								<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
									<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							</div>
						) : (
							<div className="text-blue-500">
								<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C12 2 4 10 4 16C4 20 7 22 12 22C17 22 20 20 20 16C20 10 12 2 12 2Z" />
								</svg>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Barra de Progresso Linear */}
			<div className="mb-4">
				<div className="flex justify-between text-xs text-gray-500 mb-2">
					<span>Vazio</span>
					<span>Cheio</span>
				</div>
				<div className="w-full bg-gray-200 rounded-full h-3">
					<div
						className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
						style={{ width: `${percentage}%` }}
					/>
				</div>
			</div>

			{/* Informações de Volume */}
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				<div className={`text-center p-3 rounded-xl shadow-md ${defineColor(percentage)}`}>
					<div className="text-lg font-bold">{currentVolume.toLocaleString('pt-BR')} <span className="text-xs">litros</span></div>
					<div className="text-xs">Aproximadamente</div>
				</div>
				<div className="text-center p-3 bg-gray-50 rounded-xl shadow-md">
					<div className="text-lg font-bold text-gray-600">{totalCapacity.toLocaleString('pt-BR')} <span className="text-xs">litros</span></div>
					<div className="text-xs text-gray-500">Capacidade Total</div>
				</div>
				{/* A partir de md, mostre também quando o dispositivo foi atualizado */}
				<div className="hidden md:block text-center p-3 bg-gray-50 rounded-xl shadow-md">
					<div className="text-lg font-bold text-gray-600 flex items-center justify-center gap-2">
						{isRefreshing && (
							<div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
						)}
						{formattedDate.split(' ')[0]} {formattedDate.split(' ')[1]}
					</div>
					<div className="text-xs text-gray-500">
						{isRefreshing ? 'Atualizando...' : 'Atualizado em'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default function WaterLevelIndicator({
	device,
	dataDevice,
	onRefresh,
	isRefreshing = false,
}: WaterLevelIndicatorProps) {
	const { name, code, city, complement, district, number, street, zipCode } = device;

	const data = useMemo(() => {
		return dataDevice ? dataDevice : {} as CurrentDeviceDataType;
	}, [dataDevice]);

	const calcCurrentLevel = useMemo(() => {
		if (!data?.level) return { vol: 0, percent: 0 };

		switch (data.level) {
			case 0:
				return { vol: 0, percent: 0 };
			case 25:
				return { vol: device.capacityTank * 0.25, percent: 25 };
			case 50:
				return { vol: device.capacityTank * 0.5, percent: 50 };
			case 75:
				return { vol: device.capacityTank * 0.75, percent: 75 };
			case 100:
				return { vol: device.capacityTank, percent: 100 };
			default:
				return { vol: 0, percent: 0 };
		}
	}, [data, device.capacityTank]);

	const goBack = () => {
		window.history.back();
	}

	const formattedDate = useMemo(() => {
		if (!data?.id) return "Buscando...";
		return new Date(data.createdAt).toLocaleString("pt-BR", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	}, [data]);

	// Estado de carregamento/sem dados
	if (!data?.id) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
				<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-sm w-full text-center">
					<div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
						</svg>
					</div>
					<h1 className="text-xl font-bold text-gray-900 mb-2">Dados Insuficientes</h1>
					<p className="text-gray-500 mb-6 text-sm">
						O dispositivo não possui dados suficientes para exibir o nível de água.
					</p>
					<button
						onClick={goBack}
						className="w-full bg-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-600 transition-colors"
					>
						Voltar
					</button>
				</div>
			</div>
		)
	};

	return (
		<div className="min-h-screen bg-gray-50 p-4 w-full">
			{/* Conteúdo principal */}
			<div className="max-w-screen-lg mx-auto w-full flex flex-col gap-4">
				{/* Indicador principal de nível */}
				<ModernWaterLevelIndicator
					percentage={calcCurrentLevel.percent}
					currentVolume={calcCurrentLevel.vol}
					totalCapacity={device.capacityTank}
					code={code}
					name={name}
					formattedDate={formattedDate}
					onRefresh={onRefresh}
					isRefreshing={isRefreshing}
				/>

				{/* Grid de informações rápidas */}
				<div className="md:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<DataCard
						icon={
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<circle cx="12" cy="12" r="10" />
								<polyline points="12 6 12 12 16 14" />
							</svg>
						}
						title="Última Atualização"
						value={formattedDate.split(' ')[1]}
						subtitle={formattedDate.split(' ')[0]}
						color="purple"
					/>
				</div>

				{/* Status das bombas */}
				<div>
					<h2 className="text-lg font-bold text-gray-900 mb-4">Status das Bombas</h2>
					<div className="grid grid-cols-2 gap-4">
						<PumpStatusCard
							pumpNumber={1}
							isActive={data.pumps?.[0]?.statusPower || false}
						/>
						<PumpStatusCard
							pumpNumber={2}
							isActive={data.pumps?.[1]?.statusPower || false}
						/>
					</div>
				</div>

				{/* Informações adicionais */}
				<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
					<h3 className="text-lg font-bold text-gray-900 mb-4">Informações do Local</h3>
					<div className="space-y-3">
						<div className="flex justify-between">
							<span className="text-gray-600">Endereço:</span>
							<span className="text-gray-900 font-medium text-right">
								{street}, {number}
								{complement && `, ${complement}`}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Bairro:</span>
							<span className="text-gray-900 font-medium">{district}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-600">Cidade:</span>
							<span className="text-gray-900 font-medium">{city}</span>
						</div>
						{zipCode && (
							<div className="flex justify-between">
								<span className="text-gray-600">CEP:</span>
								<span className="text-gray-900 font-medium">{zipCode}</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
