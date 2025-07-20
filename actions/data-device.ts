"use server";

import { getLastDeviceDataByDeviceId } from "@/data/device-data";

type PumpsType = {
	isFail: boolean;
	namePump: string;
	statusPower: boolean;
};

export type CurrentDeviceDataType = {
	id: string;
	deviceId: string;
	level: number;
	pumps: PumpsType[];
	createdAt: Date;
}

export const currentDeviceData = async (id: string) => {
	if (!id) {
		return { error: "Dispositivo inválido!" };
	};

	const deviceData = await getLastDeviceDataByDeviceId(id);

	if (!deviceData) {
		return { error: "Erro ao buscar os dados do dispositivo!" };
	}

	return { success: "", deviceData };
};
