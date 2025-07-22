"use client";

import { Loading } from "@/components/loading";
import WaterLevelIndicator from "@/components/water-level-indicator";
import { useDeviceStore } from "@/store/deviceStore";
import { Device } from "@prisma/client";
import { useEffect, useState, useTransition } from "react";
import { toast } from "react-toastify";
import { currentDeviceData, CurrentDeviceDataType } from "../../../../../actions/data-device";

export default function Page() {
	// pega dados na store
	const selectedDevice = useDeviceStore((state) => state.selectedDevice);
	const [isPending, startTransition] = useTransition();
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [currentData, setCurrentData] = useState<CurrentDeviceDataType>({} as CurrentDeviceDataType);

	const fetchDeviceData = async () => {
		if (!selectedDevice) {
			toast.error("Dispositivo não encontrado!");
			return;
		}

		try {
			const response = await currentDeviceData(selectedDevice.id);
			if (response.deviceData) {
				setCurrentData(response.deviceData as CurrentDeviceDataType);
			}
		} catch {
			toast.error("Erro ao buscar dados do dispositivo!");
		}
	};

	const handleRefresh = async () => {
		setIsRefreshing(true);
		try {
			await fetchDeviceData();
			toast.success("Dados atualizados com sucesso!");
		} catch {
			toast.error("Erro ao atualizar dados!");
		} finally {
			setIsRefreshing(false);
		}
	};

	useEffect(() => {
		startTransition(() => {
			fetchDeviceData();
		});
	}, [selectedDevice]);

	if (isPending) {
		return (
			<div className="flex flex-col justify-center items-center w-full h-[calc(100vh-7rem)]">
				<h3 className="text-2xl font-semibold text-blue-500 text-center">
					Estamos buscando os dados do dispositivo
				</h3>
				<p className="text-gray-500">
					Aguarde um momento
				</p>
				<Loading />
			</div>
		)
	};

	return (
		<WaterLevelIndicator
			dataDevice={currentData}
			device={selectedDevice as Device}
			onRefresh={handleRefresh}
			isRefreshing={isRefreshing}
		/>
	);
}
