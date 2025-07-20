import { db } from "../lib/db";

// Busca token de ativação do dispositivo usando id do dispositivo
export const getActivationDeviceById= async (id: string) => {
	try {
		const activeDevice = await db.deviceActivation.findUnique({
			where: {
				id
			}
		});
	
		return activeDevice;
	} catch {
		return null;
	}
}

// Busca token de ativação do dispositivo usando token do dispositivo
export const getActivationDeviceByToken= async (token: string) => {
	try {
		const activeDevice = await db.deviceActivation.findUnique({
			where: {
				token
			}
		});
	
		return activeDevice;
	} catch {
		return null;
	}
}

// deleta token de ativação do dispositivo usando id do dispositivo
export const deleteActivationDeviceById = async (id: string) => {
	try {
		const activeDevice = await db.deviceActivation.delete({
			where: {
				id
			}
		});

		return activeDevice;
	} catch {
		return null;
	}
}

// insert data model deviceActivation
export const insertActivationDevice = async (token: string, deviceId: string) => {
	try {
		const deviceData = await db.deviceActivation.create({
			data: {
				token,
				deviceId
			}
		});

		return deviceData;
	} catch {
		return null;
	}
}